class Deferred<T> {
  public resolve!: (value: T | PromiseLike<T>) => void;
  public reject!: (reason?: unknown) => void;
  public promise = new Promise<T>((resolve, reject) => {
    this.resolve = resolve;
    this.reject = reject;
  });
}

interface Result<T> {
  error?: unknown;
  value?: T;
}

// An unbounded channel for bridging pull-based and push-based async code
export class SimpleChannel<T> {
  private waitingToDeliver: Result<T>[] = [];
  private waitingToFulfill: Deferred<IteratorResult<T>>[] = [];
  private closed = false;
  private onCancel: (() => void) | null = null;

  constructor(onCancel: (() => void) | null) {
    this.onCancel = onCancel;
  }

  next(): Promise<IteratorResult<T>> {
    // We have queued results, deliver those
    if (this.waitingToDeliver.length !== 0) {
      const next = this.waitingToDeliver.shift()!;
      if (next.error) {
        return Promise.reject(next.error);
      } else {
        return Promise.resolve({
          value: next.value!,
          done: false,
        });
      }
    }

    // No queued results and no more are coming, we must be done
    if (this.closed) {
      return Promise.resolve({
        done: true,
        value: undefined,
      });
    }

    // No queued results, but more may be coming, queue up a promise
    const deferred = new Deferred<IteratorResult<T>>();
    this.waitingToFulfill.push(deferred);
    return deferred.promise;
  }

  push(value: T): void {
    if (this.closed) {
      // Don't waste buffer space if no one is listening
      return;
    }
    // Someone is already waiting for this value, deliver it to them
    if (this.waitingToFulfill.length !== 0) {
      this.waitingToFulfill.shift()!.resolve({
        value,
        done: false,
      });
    } else {
      // No one is waiting for the value yet, queue it up
      this.waitingToDeliver.push({ value });
    }
  }

  push_err(err: unknown): void {
    if (this.closed) {
      // Don't waste buffer space if no one is listening
      return;
    }
    // Someone is already waiting for this value, deliver it to them
    if (this.waitingToFulfill.length !== 0) {
      this.waitingToFulfill.shift()!.reject(err);
    } else {
      // No one is waiting for the value yet, queue it up
      this.waitingToDeliver.push({ error: err });
    }
  }

  [Symbol.asyncIterator]() {
    return this;
  }

  close(): void {
    if (this.closed) {
      return;
    }
    this.closed = true;
    for (const deferred of this.waitingToFulfill) {
      deferred.resolve({
        done: true,
        value: undefined,
      });
    }
    this.waitingToFulfill = [];
  }

  doCancel(): void {
    this.closed = true;
    if (this.onCancel) {
      this.onCancel();
    }
  }

  async return(value?: T): Promise<IteratorResult<T>> {
    this.doCancel();
    return {
      done: true,
      value: value!,
    };
  }

  async throw(): Promise<IteratorResult<T>> {
    this.doCancel();
    return {
      done: true,
      value: undefined,
    };
  }
}

export async function lastValueFrom<T>(iterable: AsyncIterable<T>): Promise<T | undefined> {
  let last: T | undefined;
  for await (const value of iterable) {
    last = value;
  }
  return last;
}

export async function firstValueFrom<T>(iterable: AsyncIterable<T>): Promise<T | undefined> {
  for await (const value of iterable) {
    // I don't know if this cancels the iterable or not.  I'm hoping, since we are returning early
    // here, it knows to call the iterable's return method.
    return value;
  }
  return undefined;
}

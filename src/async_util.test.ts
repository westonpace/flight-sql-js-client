import { beforeEach, describe, expect, test } from "@jest/globals";

import { lastValueFrom, firstValueFrom } from "./async_util";

describe("given an async iterable", () => {
  class CustomIterable {
    returned = false;
    value = 0;

    [Symbol.asyncIterator]() {
      return this;
    }

    async next() {
      if (this.value < 3) {
        const val = this.value;
        this.value += 1;
        return {
          done: false,
          value: val,
        };
      } else {
        return {
          done: true,
          value: undefined,
        };
      }
    }

    async return(value: unknown) {
      this.returned = true;
      return {
        done: true,
        value: value,
      };
    }
  }

  let customIterable: CustomIterable;
  beforeEach(() => {
    customIterable = new CustomIterable();
  });

  test("can grab last value", async () => {
    const last = await lastValueFrom(customIterable);
    expect(last).toBe(2);
    // We don't return early if we're grabbing the last value since the iterator exhausts
    // normally.
    expect(customIterable.returned).toBe(false);
  });

  test("can grab first value", async () => {
    const first = await firstValueFrom(customIterable);
    // firstValueFrom should call `return` on the iterator, this is important because
    // we want to cancel an underlying GRPC call if we've stopped listening to it
    expect(first).toBe(0);
    expect(customIterable.returned).toBe(true);
  });
});

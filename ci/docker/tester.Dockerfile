FROM node:20

WORKDIR /

COPY . /app

WORKDIR /app

RUN npm ci
RUN npm run build
RUN npm pack

WORKDIR /app/integration_test

RUN npm ci
RUN npm install ../*.tgz

CMD npx jest

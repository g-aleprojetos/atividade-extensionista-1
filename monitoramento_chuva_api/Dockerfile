FROM node:17-alpine3.12 as base

WORKDIR /home/node/app

COPY prisma ./prisma/

COPY .env ./

COPY package*.json ./

RUN yarn install

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN yarn run build

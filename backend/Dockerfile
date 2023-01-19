FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build


FROM node:18-alpine AS server

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production

COPY --from=builder ./app/build ./build
#COPY --from=builder ./app/src/ssl ./build/ssl
COPY --from=builder ./app/.env ./

EXPOSE 4500

CMD ["node", "build/index.js"]
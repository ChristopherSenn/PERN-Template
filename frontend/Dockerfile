FROM node:slim as installer

WORKDIR /app
COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

FROM installer as builder

RUN yarn build

FROM nginx:1.23.1-alpine as runner

RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
RUN chgrp -R root /var/cache/nginx

RUN addgroup nginx root
USER nginx

COPY --from=builder /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx

USER nginx
EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]
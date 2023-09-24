FROM node:alpine as builder

COPY package*.json .

WORKDIR /app

RUN npm ci --silentd

COPY . .

RUN npm run build:prod

FROM nginx:alpine

EXPOSE 3000

COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html


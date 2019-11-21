FROM node:10.15.3-alpine

WORKDIR /srv/app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm ci

COPY ./tsconfig.json ./tsconfig.json
COPY ./webpack.config.js ./webpack.config.js
COPY ./src ./src

RUN npm run build

FROM node:10.15.3-alpine
WORKDIR /srv/app/bin
COPY --from=0 /srv/app/target/main.js .
ENTRYPOINT [ "node", "/srv/app/bin/main.js" ]

FROM alpine:3.10

RUN apk --no-cache --update add \
        bash

WORKDIR /srv/app

COPY ./postgrest-v6.0.2-linux-x64-static.tar.xz .

RUN tar xfJ ./postgrest-v6.0.2-linux-x64-static.tar.xz \
        && rm ./postgrest-v6.0.2-linux-x64-static.tar.xz

COPY ./bin ./bin

ENTRYPOINT [ "/srv/app/bin/run.sh" ]

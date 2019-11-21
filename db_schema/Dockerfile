FROM postgres:12.0-alpine

WORKDIR /srv/app

COPY ./def ./def

COPY ./bin ./bin

ENTRYPOINT [ "/srv/app/bin/install.sh" ]

#!/bin/sh


set -v

/srv/app/bin/create_conf_from_env.sh > /srv/app/postgrest.conf

cat /srv/app/postgrest.conf

/srv/app/postgrest /srv/app/postgrest.conf

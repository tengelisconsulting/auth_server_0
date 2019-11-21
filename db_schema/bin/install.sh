#!/bin/sh

find /srv/app/def/extensions -name '*.sql' | xargs -i psql -h ${PGHOST} -U ${PGUSER} -f '{}'
find /srv/app/def/schemas -name '*.sql' | xargs -i psql -h ${PGHOST} -U ${PGUSER} -f '{}'
find /srv/app/def/tables -name '*.sql' | xargs -i psql -h ${PGHOST} -U ${PGUSER} -f '{}'
find /srv/app/def/functions -name '*.sql' | xargs -i psql -h ${PGHOST} -U ${PGUSER} -f '{}'

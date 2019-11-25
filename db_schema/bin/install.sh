#!/bin/sh

execute_all_sql_at_root() {
    for f in $(find "${1}" -name '*.sql'); do
        echo "${f}"
        psql -h ${PGHOST} -U ${PGUSER} -f "${f}"
    done

}

execute_all_sql_at_root /srv/app/def/extensions
execute_all_sql_at_root /srv/app/def/schemas
execute_all_sql_at_root /srv/app/def/tables
execute_all_sql_at_root /srv/app/def/views
execute_all_sql_at_root /srv/app/def/functions

import { env } from 'process';

const conf = {
  is_dev: parseInt(env['IS_DEV']),
  api_db_port: parseInt(env['API_DB_PORT']),
  api_db_host: env['API_DB_HOSTNAME'],
  http_listen_port: parseInt(env['HTTP_LISTEN_PORT']),
  auth_cookie_name: 'AUTH_TOKEN',
  session_expiry_s: 60 * 60 * 24,
};

export function get_env() {
  return conf;
};

import { http_get } from "./http_request";
import { get_env } from "../get_env";

export async function get_postgrest(
  url: string
): Promise<any> {
  const app_env = get_env();
  return await http_get(
    `http://${app_env.api_db_host}:${app_env.api_db_port}${url}`
  );
}

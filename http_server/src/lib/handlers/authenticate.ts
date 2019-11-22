import { Handler } from "../types/Handler";
import { http_get } from "../core/http_request";
import { get_env } from "../core/get_env";
import { generate_jwt } from "../core/generate_jwt";
import { get_private_key } from "../core/get_private_key";


export const authneticate_username_pass: Handler = async (ctx, _next) => {
  const app_env = get_env();
  try {
    const username: string = ctx.request.body.username;
    const password: string = ctx.request.body.password;
    const user_id = await http_get(
      `http://${app_env.api_db_host}:${app_env.api_db_port}/rpc/check_username_password?p_username=${username}&p_password=${password}`
    );
    if (user_id) {
      const token = await generate_jwt(
        user_id, get_private_key()
      );
      ctx.body = {
        token: token,
      };
    } else {
      ctx.status = 401;
      ctx.body = 'FAILURE';
    }
  } catch (e) {
    console.trace(e);
    ctx.status = 401;
    ctx.body = 'FAILURE';
  }
}

import * as Koa from "koa";
import * as jwt from "jsonwebtoken";

import { get_env } from "../get_env";
import { verify_jwt_to_user_id } from "../jwt";

export async function get_user_id(
  ctx: Koa.ParameterizedContext<any>
): Promise<string> {
  try {
    const auth_cookie = get_env().auth_cookie_name;
    const token = ctx.cookies.get(auth_cookie);
    if (!token) {
      ctx.throw(401, `Supply ${auth_cookie} cookie`);
    }
    const user_id = await verify_jwt_to_user_id(token);
    return user_id;
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      ctx.throw(401, 'Token expired');
    }
    ctx.throw(401, 'Error parsing authorization cookie');
  }

}

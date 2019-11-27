import * as Koa from "koa";

import { get_postgrest } from "../core/http/req_postgrest";
import { generate_jwt } from "../core/jwt";
import { get_env } from "../core/get_env";


export async function authneticate_username_pass(
  ctx: Koa.ParameterizedContext<any>, _next: Koa.Next
) {
  try {
    const username: string = ctx.request.body.username;
    const password: string = ctx.request.body.password;
    const user_id = await get_postgrest(
      `/rpc/check_username_password?p_username=${username}&p_password=${password}`
    );
    if (!user_id) {
      ctx.throw(401, 'Failure to authenticate');
    }
    const token = await generate_jwt(user_id);
    ctx.body = {
      token: token,
    };
    ctx.cookies.set(
      get_env().auth_cookie_name,
      token,
      // { httpOnly: true, }
    );
  } catch (e) {
    console.trace(e);
    ctx.throw(401, 'Failure to authenticate');
  }
}

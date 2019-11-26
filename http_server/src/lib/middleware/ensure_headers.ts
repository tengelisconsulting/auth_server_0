import * as Koa from "koa";
import { set_cors_headers } from "../core/headers/enable_cors";


export async function ensure_headers(
  ctx: Koa.ParameterizedContext<any>, next: Koa.Next
): Promise<void> {
  set_cors_headers(ctx);
  try {
    await next();
  } catch (e) {
    set_cors_headers(ctx);
    ctx.status = parseInt(e.status || 500);
    if (e.message) {
      ctx.body = e.message;
    }
  }
}

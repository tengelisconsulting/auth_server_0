import * as Koa from "koa";


export function set_cors_headers(ctx: Koa.ParameterizedContext<any>): void {
  const req_origin = ctx.request.get('Origin');
  ctx.set('Access-Control-Allow-Origin', req_origin);
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
}

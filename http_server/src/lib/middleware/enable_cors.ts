import { Handler } from "../types/Handler";

export const enable_cors: Handler = async (ctx, next) => {
  await next();
  ctx.set('Access-Control-Allow-Origin', '*');
};

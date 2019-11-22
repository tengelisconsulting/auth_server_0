import * as Koa from "koa";


export type Handler = (
  ctx: Koa.ParameterizedContext<any>,
  next: Koa.Next
) => void;

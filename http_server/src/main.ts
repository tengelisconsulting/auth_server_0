import { env } from 'process';

import * as Koa  from 'koa';
import * as KoaRouter from 'koa-router';
import * as koaBodyParser from 'koa-bodyparser'

import { http_get } from './lib/http_request';


const app = new Koa();
const router = new KoaRouter();

const api_db_port = parseInt(env['API_DB_PORT']);
const http_listen_port = parseInt(env['HTTP_LISTEN_PORT']);


router
  .post('/authenticate/username-password', async (ctx, next) => {
    try {
      const username: string = ctx.request.body.username;
      const password: string = ctx.request.body.password;
      const result = await http_get(
        `http://postgrest:3001/rpc/check_username_password?p_username=${username}&p_password=${password}`
      );
      if (result) {
        ctx.body = 'SUCCESS';
      } else {
        ctx.status = 401;
        ctx.body = 'FAILURE';
      }
    } catch (e) {
      ctx.status = 401;
      ctx.body = 'FAILURE';
    }
  })
;

app
  .use(koaBodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
;

console.log(`listending on ${http_listen_port}`);
app.listen(http_listen_port);

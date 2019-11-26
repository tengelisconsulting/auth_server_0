import * as Koa  from 'koa';
import * as KoaRouter from 'koa-router';
import * as koaBodyParser from 'koa-bodyparser'
import { get_env } from './lib/core/get_env';
import { authneticate_username_pass } from './lib/handlers/authenticate';
import { enable_cors } from './lib/middleware/enable_cors';
import { get_permissions } from './lib/handlers/get_permissions';


const app_env = get_env();
const app = new Koa();
const router = new KoaRouter();

router
  .post('/authenticate/username-password', authneticate_username_pass)
  .get('/permissions', get_permissions)
;

app
  .use(enable_cors)
  .use(koaBodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
;

console.log(`listending on ${app_env.http_listen_port}`);
app.listen(app_env.http_listen_port);

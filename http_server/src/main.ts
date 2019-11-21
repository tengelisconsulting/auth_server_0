import * as Koa  from "koa";
import { env } from "process";

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello, world';
});

const port = parseInt(env['HTTP_LISTEN_PORT'])
console.log(`listending on ${port}`);
app.listen(port);

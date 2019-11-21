import * as Koa  from "koa";

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello, world';
});

console.log('listening on 3000');
app.listen(3000);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const route = new Router();
route.get('/', async (ctx, next) => {
    ctx.body = 'to be hehehe';
});
app.use(route.routes());
app.listen(3000, '127.0.0.1', () => {
    console.log('server listening on port 3000');
});

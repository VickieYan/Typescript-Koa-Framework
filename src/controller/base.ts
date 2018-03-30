import { BaseContext } from 'koa';
import * as Koa from 'koa';

export default class Controller {
    ctx: BaseContext;
    app: Koa;
    constructor(ctx: BaseContext, app: Koa) {
        this.ctx = ctx;
        this.app = app;
    }
}

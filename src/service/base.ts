import { BaseContext } from 'koa';
import * as Koa from 'koa';

class Service {
    ctx: BaseContext;
    app: Koa;
    constructor(ctx: BaseContext, app: Koa) {
        this.ctx = ctx;
        this.app = app;
    }
}

export default Service;

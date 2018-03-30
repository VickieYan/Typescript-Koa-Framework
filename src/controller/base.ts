import { BaseContext } from 'koa';

export default class Controller {
    ctx: BaseContext;

    constructor(ctx: BaseContext) {
        this.ctx = ctx;
    }
}

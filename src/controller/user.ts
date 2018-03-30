import Controller from './base';

export default class User extends Controller {
    async user() {
        this.ctx.body = this.ctx.service.check.index();
    }

    async userInfo() {
        this.ctx.body = this.getConfig().middleware[0];
        // this.ctx.body = 'test';
    }

    getConfig() {
        return (<any>this.app)['config'];
    }
}

import Controller from './base';
import { bp } from '../blueprint';

export default class User extends Controller {
    @bp.get('/user')
    async user() {
        this.ctx.body = this.ctx.service.check.index();
    }

    @bp.get('/userinfo')
    async userInfo() {
        this.ctx.body = this.getConfig().middleware[0];
    }

    getConfig() {
        return (<any>this.app)['config'];
    }

    @bp.get('/uc')
    async post() {
        this.ctx.body = 'good routing';
    }

    @bp.post('/uc')
    async get() {
        this.ctx.body = 'good routing';
    }
}

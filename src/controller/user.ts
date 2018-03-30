import Controller from './base';

export default class User extends Controller {
    test = 1;
    test2 = 1;
    test3 = 1;

    async user() {
        this.ctx.body = 'hello userr';
    }

    async userInfo() {
        this.ctx.body = 'hello userinfo';
    }
}

// export default User;

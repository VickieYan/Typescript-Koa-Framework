"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class User extends base_1.default {
    constructor() {
        super(...arguments);
        this.test = 1;
        this.test2 = 1;
        this.test3 = 1;
    }
    async user() {
        this.ctx.body = 'hello userr';
    }
    async userInfo() {
        this.ctx.body = 'hello userinfo';
    }
}
exports.default = User;
// export default User;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class User extends base_1.default {
    async user() {
        this.ctx.body = this.ctx.service.check.index();
    }
    async userInfo() {
        this.ctx.body = this.getConfig().middleware[0];
        // this.ctx.body = 'test';
    }
    getConfig() {
        return this.app['config'];
    }
}
exports.default = User;

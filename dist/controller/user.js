"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const blueprint_1 = require("../blueprint");
class User extends base_1.default {
    async user() {
        this.ctx.body = this.ctx.service.check.index();
    }
    async userInfo() {
        this.ctx.body = this.getConfig().middleware[0];
    }
    getConfig() {
        return this.app['config'];
    }
    async post() {
        this.ctx.body = 'good routing';
    }
    async get() {
        this.ctx.body = 'good routing';
    }
}
__decorate([
    blueprint_1.bp.get('/user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "user", null);
__decorate([
    blueprint_1.bp.get('/userinfo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "userInfo", null);
__decorate([
    blueprint_1.bp.get('/uc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "post", null);
__decorate([
    blueprint_1.bp.post('/uc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "get", null);
exports.default = User;

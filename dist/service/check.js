"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Service {
    constructor(ctx) {
        this.ctx = ctx;
    }
}
class check extends Service {
    index() {
        return 2 + 3;
    }
}
module.exports = check;

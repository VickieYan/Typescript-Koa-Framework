import * as Koa from 'koa';
import * as fs from 'fs';
import * as Router from 'koa-router';
import { BaseContext } from 'koa';
import { bp } from './blueprint';
export class Loader {
    router: Router = new Router();
    controller: any = {};
    app: Koa;

    constructor(app: Koa) {
        this.app = app;
    }

    loadController() {
        // const dirs = fs.readdirSync(__dirname + '/controller');
        // dirs.forEach(filename => {
        //     const property = filename.split('.')[0];
        //     const mod = require(__dirname + '/controller/' + filename).default;
        //     if (mod) {
        //         // ['user', 'userInfo']
        //         const methodNames = Object.getOwnPropertyNames(
        //             mod.prototype
        //         ).filter(names => {
        //             if (names !== 'constructor') {
        //                 return names;
        //             }
        //         });
        //         Object.defineProperty(this.controller, property, {
        //             get() {
        //                 const merge: { [key: string]: any } = {};
        //                 methodNames.forEach(name => {
        //                     merge[name] = {
        //                         type: mod,
        //                         methodName: name,
        //                     };
        //                 });
        //                 return merge;
        //             },
        //         });
        //     }
        // });
        // console.log(JSON.stringify(this.controller.user));
        // {"user":{"methodName":"user"},"userInfo":{"methodName":"userInfo"}}
        const dirs = fs.readdirSync(__dirname + '/controller');
        dirs.forEach(filename => {
            require(__dirname + '/controller/' + filename).default;
        });
    }

    loadService() {
        const service = fs.readdirSync(__dirname + '/service');
        var that = this;
        Object.defineProperty(this.app.context, 'service', {
            get() {
                if (!(<any>this)['cache']) {
                    (<any>this)['cache'] = {};
                }
                const loaded = (<any>this)['cache'];
                if (!loaded['service']) {
                    loaded['service'] = {};
                    service.forEach(d => {
                        const name = d.split('.')[0];
                        const mod = require(__dirname + '/service/' + d);

                        loaded['service'][name] = new mod(this, that.app);
                    });
                    return loaded.service;
                }
                return loaded.service;
            },
        });
    }

    loadConfig() {
        const configDef = __dirname + '/config/config.default.js';
        const configEnv =
            __dirname +
            (process.env.NODE_ENV === 'production'
                ? '/config/config.pro.js'
                : '/config/config.dev.js');
        const conf = require(configEnv);
        const confDef = require(configDef);
        const merge = Object.assign({}, conf, confDef);
        Object.defineProperty(this.app, 'config', {
            get: () => {
                return merge;
            },
        });
    }

    loadRouter() {
        this.loadController();
        this.loadService();
        this.loadConfig();

        // const mod = require(__dirname + '/router.js');
        // const routers = mod(this.controller);
        // Object.keys(routers).forEach(key => {
        //     const [method, path] = key.split(' ');
        //     (<any>this.router)[method](path, async (ctx: BaseContext) => {
        //         const _class = routers[key].type;
        //         const handler = routers[key].methodName;
        //         const instance = new _class(ctx, this.app);
        //         instance[handler]();
        //     });
        // });
        const r = bp.getRoute();
        Object.keys(r).forEach(url => {
            r[url].forEach(object => {
                (<any>this.router)[object.httpMethod](
                    url,
                    async (ctx: BaseContext) => {
                        const instance = new object.constructor(ctx, this.app);
                        await instance[object.handler]();
                    }
                );
            });
        });
        return this.router.routes();
    }
}

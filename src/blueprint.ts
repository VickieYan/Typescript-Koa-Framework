interface Bp {
    httpMethod: string;
    constructor: any;
    handler: string;
}

interface Bps {
    [key: string]: Array<Bp>;
}

export class Blueprint {
    router: Bps = {}; //用于保存路由的映射关系

    setRouter(url: string, blueprint: Bp) {
        const _bp = this.router[url];
        if (_bp) {
            for (const index in _bp) {
                const object = _bp[index];
                if (object.httpMethod === blueprint.httpMethod) {
                    console.log(
                        `路由地址 ${object.httpMethod} ${url} 已经存在`
                    );
                    return;
                }
            }
            this.router[url].push(blueprint);
        } else {
            this.router[url] = [];
            this.router[url].push(blueprint);
        }
    }

    get(url: string) {
        return (target: any, propertyKey: string) => {
            (<any>this).setRouter(url, {
                httpMethod: 'get',
                constructor: target.constructor,
                handler: propertyKey,
            });
        };
    }

    post(url: string) {
        return (target: any, propertyKey: string) => {
            (<any>this).setRouter(url, {
                httpMethod: 'post',
                constructor: target.constructor,
                handler: propertyKey,
            });
        };
    }

    put(url: string) {
        return (target: any, propertyKey: string) => {
            (<any>this).setRouter(url, {
                httpMethod: 'put',
                constructor: target.constructor,
                handler: propertyKey,
            });
        };
    }

    getRoute() {
        return this.router;
    }
}

export const bp = new Blueprint();

import * as Koa from 'koa';
import { BaseContext } from 'koa';
import Service from './base';

class check extends Service {
    index() {
        return 2 + 3;
    }
}


module.exports = check;

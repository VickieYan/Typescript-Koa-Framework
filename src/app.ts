import * as Koa from 'koa';
// import * as Router from 'koa-router';
import { Loader } from './loader';

const app = new Koa();

const loader = new Loader(app);

app.context.extends = 1;

app.use(loader.loadRouter());

app.listen(3000, '127.0.0.1', () => {
    console.log('server listening on port 3000');
});

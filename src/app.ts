import * as Koa from 'koa'
import * as Router from 'koa-router'

const app = new Koa()

const route = new Router()

route.get('/', async (ctx, next) => {
    ctx.body = 'to be hehehe'
})

app.use(route.routes())

app.listen(3000, '127.0.0.1', () => {
    console.log('server listening on port 3000')
})

const router = require('koa-router')()

router.prefix('/api')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/home', function (ctx, next) {
  ctx.body = 'hello world!'
})

module.exports = router

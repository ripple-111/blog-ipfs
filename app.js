const koa=require('koa')
const app=new koa()

const onerror=require('koa-onerror')
const bodyparser =require( "koa-bodyparser");
const logger =require( "koa-logger");
const router =require( "./routes/index.js");
const cors =require( "koa-cors");
const koajwt =require( "koa-jwt");


// 注册error
onerror(app);
// 注册bodyparser
app.use(bodyparser());
// 注册日志
app.use(logger());
// 注册静态资源
app.use(require("koa-static")(__dirname + "/public"));
// 注册跨域
app.use(
    cors({
    origin:true,
    credentials: true})
    );
//注册自定义中间价，捕获jwt错误
app.use(async (ctx, next)=>{
    try {
        return await next();
    } catch (err) {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = { msg: '用户未登录或登录信息过期' };
        } else {
            throw err;
        }
    }
})
// 注册自定义中间件
app.use(
    koajwt({
        secret:'ripple-blog',
        debug:true,
    }).unless({
        path: ['/api/userService/login', '/api/userService/register','/uploadHead']
    })
)
require( './middlewares/index.js')(app);
// 注册路由
app.use(router.routes(), router.allowedMethods());

//jwt判断是否需要token验证

// logger-handling
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports= app;

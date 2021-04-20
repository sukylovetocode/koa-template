const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const session = require("koa-generic-session");
const redisStore = require("koa-redis");

const { REDIS_CONF } = require("./conf/db");

const { initRouter } = require("./routes/index");

// error handler
onerror(app); // 页面显示错误

// middlewares
// 解析post数据
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());

// 日志
app.use(logger());
// 静态文件托管
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "ejs",
  })
);

// session 配置
app.keys = ["UIsds_75598*&"];
app.use(
  session({
    key: "weibo.sid", // cookie name
    prefix: "weibo:sess:", // redis key的前缀
    cookie: {
      path: "/",
      httpOnly: true, // 只允许服务端修改
      maxAge: 24 * 60 * 60 * 1000,
    },
    store: redisStore({
      all: `${REDIS_CONF.host}:${REDIS_CONF.port}`,
    }),
  })
);

// logger 中间件演示
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// 集中路由处理
initRouter(app);

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;

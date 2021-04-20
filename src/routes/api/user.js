const router = require("koa-router")();
const { register, login } = require("../../controller/user");
const userValidate = require("../../utils/validator/user");
const { genValidator } = require("../../middlewares/validator");

router.prefix("/api/user");

router.post("/register", genValidator(userValidate), async (ctx, next) => {
  const { username, password } = ctx.request.body;
  ctx.body = await register({ username, password });
});

router.post("/login", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  ctx.body = await login(ctx, username, password);
});

// 404
// router.get('*', async (ctx, next) => {
//     await ctx.render('404')
// })
module.exports = router;

const router = require("koa-router")();
const { loginCheck } = require("../../middlewares/loginCheck");

router.get("/", loginCheck, async (ctx, next) => {
  await ctx.render("index", {
    title: "title",
  });
});

router.get("/login", async (ctx, next) => {
  await ctx.render("login");
});

router.get("/register", async (ctx, next) => {
  await ctx.render("register");
});

module.exports = router;

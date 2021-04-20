async function loginCheck(ctx, next) {
  if (ctx.session && ctx.session.userInfo) {
    console.log("登录成功");
    await next();
    return;
  }
  await next();
  return;
}

module.exports = {
  loginCheck,
};

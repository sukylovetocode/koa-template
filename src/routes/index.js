const index = require("./views/index");
const userAPIRouter = require("./api/user");

async function initRouter(app) {
  app.use(index.routes(), index.allowedMethods());
  app.use(userAPIRouter.routes(), userAPIRouter.allowedMethods());
}

module.exports = {
  initRouter,
};

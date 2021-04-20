const { getUserInfo, createUser } = require("../services/user");
const { SuccessModel, ErrorModel } = require("../utils/resModel/model");
const {
  UserNameExist,
  UserNameNoExist,
  ServerError,
} = require("../utils/resModel/errorInfo");
const {
  RegisterSuccess,
  LoginSuccess,
} = require("../utils/resModel/successInfo");

async function register({ username, password }) {
  const userInfo = await getUserInfo(username);
  if (userInfo) {
    return new ErrorModel(UserNameExist);
  }

  try {
    await createUser({
      username,
      password,
    });
    return new SuccessModel(RegisterSuccess);
  } catch {
    return new ErrorModel(ServerError);
  }
}

async function login(ctx, username, password) {
  const userInfo = await getUserInfo(username);
  if (!userInfo) {
    return new ErrorModel(UserNameNoExist);
  }

  if (ctx.session.userInfo == null) {
    ctx.session.userInfo = userInfo;
  }
  return new SuccessModel(LoginSuccess);
}

module.exports = {
  register,
  login,
};

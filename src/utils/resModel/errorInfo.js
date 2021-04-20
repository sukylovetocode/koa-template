/**
 * @description 返回状态集合
 * */
module.exports = {
  indexError: {
    status: 10000,
    message: "初始化错误",
  },
  UserNameExist: {
    status: 10001,
    message: "用户名已存在",
  },
  UserNameNoExist: {
    status: 10002,
    message: "用户名不存在",
  },
  ServerError: {
    status: 500,
    message: "服务器出错",
  },
  jsonSchemaFileInfo: {
    status: 10009,
    message: "数据格式校验错误",
  },
};

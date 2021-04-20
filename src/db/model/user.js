/**
 * @description 用户模型
 */

const seq = require("../seq");
const { DataTypes } = require("sequelize");

const User = seq.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "用户名",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "密码",
  },
});

module.exports = User;

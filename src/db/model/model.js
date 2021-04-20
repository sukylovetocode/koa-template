/**
 * @description  模型关系构建
 */

const User = require("./user");

// 外键链接
// Blog.belongsTo(User, {
//   foreignKey: 'userId'
// })

// User.hasMany(UserRelation, {
//   foreignKey: 'userId'
// })

module.exports = {
  User,
};

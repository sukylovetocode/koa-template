const { User } = require("../db/model/model");

async function getUserInfo(username) {
  const result = await User.findOne({
    attributes: ["id", "username"],
    where: { username },
  });
  if (!result) {
    return result;
  }

  return result.dataValues;
}

async function createUser({ username, password }) {
  const result = await User.create({
    username,
    password,
  });
  return result.dataValues;
}

// 连表查询
// const result = await Blog.findAndCountAll({
//   limit: pageSize,
//   offset: pageSize * pageIndex,
//   order: [
//       ['id', 'desc']
//   ],
//   include: [
//       // @ 关系
//       {
//           model: AtRelation,
//           attributes: ['userId', 'blogId'],
//           where: { userId }
//       },
//       // User
//       {
//           model: User,
//           attributes: ['userName', 'nickName', 'picture']
//       }
//   ]
// })

module.exports = {
  getUserInfo,
  createUser,
};

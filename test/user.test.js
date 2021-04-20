// 测试 user model
const { User } = require("../src/db/model/model");

test("User 建造合规范", () => {
  // 不提交数据库 要我们再进行保存
  const user = User.build({
    username: "suky",
    password: "123456",
  });
  // 验证属性
  expect(user.username).toBe("suky");
  expect(user.password).toBe("123456");
});

// 测试 user api
const server = require("./server");

const username = `u_${Date.now()}`;
const password = `p_${Date.now()}`;

const testUser = {
  username,
  password,
};

let COOKIE = "";

//注册
test("注册一个用户 应该成功", async () => {
  const res = await server.post("/api/user/register").send(testUser);
  expect(res.body.status).toBe(200);
});

test("重复注册要失败", async () => {
  const res = await server.post("/api/user/register").send(testUser);
  expect(res.body.status).not.toBe(200);
});

test("登录一下", async () => {
  const res = await server.post("/api/user/login").send(testUser);
  expect(res.body.status).toBe(200);

  COOKIE = res.headers["set-cookie"].join(";");
});

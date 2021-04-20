// 链接数据库
const { Sequelize } = require("sequelize");
const { MYSQL_CONF } = require("../conf/db");
const { isProd, isDev } = require("../utils/env");

const { host, user, password, database } = MYSQL_CONF;

const conf = {
  host,
  dialect: "mysql",
};

// 测试环境就关闭日志
if (isDev) {
  conf.logging = () => {};
}

// 线上环境使用连接池
if (isProd) {
  conf.pool = {
    max: 5,
    min: 0,
    idle: 10000,
  };
}
const seq = new Sequelize(database, user, password, conf);

// testing the connect
async function testConnect() {
  try {
    await seq.authenticate();
    console.log("connection has been established successfully");
  } catch (error) {
    console.error(error);
  }
}
testConnect();

// 执行同步 同步我们的数据库
seq.sync().then(() => {
  console.log("sync ok");
  // process.exit();
});

module.exports = seq;

/**
 * @description 存储配置
 */

const { isProd } = require("../utils/env");

let REDIS_CONF = {
  port: 6379,
  host: "127.0.0.1",
};

const MYSQL_CONF = {
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  port: 3306,
  database: "weibo_db",
};

if (isProd) {
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1",
  };

  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "123456",
    port: 3306,
    database: "weibo_db",
  };
}

module.exports = {
  REDIS_CONF,
  MYSQL_CONF,
};

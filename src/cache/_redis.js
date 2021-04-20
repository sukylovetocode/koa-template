/**
 * @description 链接reids 方法
 * */

const redis = require("redis");
const { REDIS_CONF } = require("../conf/db");

// 创建服务端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);
redisClient.on("error", (err) => {
  console.error("redis error", err);
});

/**
 * redis set
 * @param {string} key
 * @param {string} val
 * @param {number} [timeout=60 * 60]
 */
function set(key, val, timeout = 60 * 60) {
  if (typeof val === "object") {
    val = JSON.stringify(val);
  }
  redisClient.set(key, val);
  redisClient.expire(key, timeout);
}

/**
 * redis get
 * @param {string} key
 */
function get(key, callback) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err);
        return;
      }
      if (val == null) {
        resolve(null);
        return;
      }
      // 不是json就直接返回
      try {
        resolve(JSON.parse(val));
      } catch (ex) {
        resolve(val);
      }
    });
  });
  return promise;
}

module.exports = {
  set,
  get,
};

const Redis = require('ioredis');

let redis = undefined;

const initializeRedis = () => {
  redis = new Redis(config.redis.port, config.redis.host);
};

export const getRedis = () => {
  if (redis == undefined) {
    initializeRedis();
  }

  return redis;
}
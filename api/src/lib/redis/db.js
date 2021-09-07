const Redis = require('ioredis');
const { config } = require('../config');

let redis = undefined;

const initializeRedis = () => {
  try {
    const redisConfig = {
      port: config.redis.port, 
      host: config.redis.host,
      connectTimeout: 5000,
    };

    console.log(redisConfig);

    redis = new Redis(redisConfig);
  } catch(err) {
    console.log('failed to connected to redis');
    process.exit(1);  
  }
};

export const getRedis = () => {
  if (redis == undefined) {
    initializeRedis();
  }

  return redis;
}
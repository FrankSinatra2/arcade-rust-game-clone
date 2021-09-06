
export const config = {
  port: process.env.PORT || 3030,
  redis: {
    port: process.env.REDIS_PORT || 6380,
    host: process.env.REDIS_HOST || '127.0.0.1'
  },
  bcrypt: {
    saltRounds: 10
  },
  auth: {
    secret: 'anime-tiddies'
  }
};

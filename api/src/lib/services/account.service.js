import { getRedis } from "../redis/db";
import { v4 as uuid } from "uuid";
import { config } from "../config"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AccountService {

  constructor() {
    this.redis = getRedis();
  }

  async createAccount(payload) {

    const username = payload.username;
    const password = payload.password;
    const id = uuid();

    const key = `Account ${id}`;

    return bcrypt.hash(password, config.bcrypt.saltRounds)
      .catch(err => {
        return {
          status: 500,
          message: 'Failed to hash password'
        };
      })
      .then(hashedPwd => {
        const account = {
          username: username,
          password: hashedPwd,
          id: uuid()
        };
        return this.redis.setnx(key, JSON.stringify(account))
      })
      .then(exists => {
        
        const status = exists === 0 ? 409 : 200;
        const message = exists === 0 ? 'Redis failed to write account' : 'Account created';
        
        return { status, message };
      })
      .catch(err => {
        return {
          status: 500,
          message: 'Redis failed to write account'
        };
      });
  }

  async deleteAccount(payload) {
    const id = payload.id;
    const key = `Account ${id}`;

    return this.redis.del(key)
      .then(() => {
        return {
          status: 200,
          message: 'Account deleted'
        }
      })
      .catch(() => {
        return {
          status: 500,
          message: 'Failed to delete account'
        }
      });
  }

  async getAccount(payload) {
    const id = payload.id;
    const key = `Account ${id}`;

    return this.redis.get(key)
      .then((result) => {
        const account = JSON.parse(result);
        return {
          status: 200,
          ...account
        }
      })
      .catch(() => {
        return {
          status: 404,
          message: 'Failed to retrieve account'
        }
      })
  }

  async authenticateAccount(payload) {
    const username = payload.username;
    const password = payload.password;

    return new Promise((resolve, reject) => {
      const stream = this.redis.scanStream({
        match: "Account *",
        count: 20
      });

      let account;


      const signAccount = (data) => {
        return jwt.sign({ ...data }, config.auth.secret);
      };

      stream.on("data", (keys) => {
        for (const key of keys) {

          try {
            const record = await this.redis.get(key);
            const account = JSON.parse(record);

            const match = await bcrypt.compare(password, account.password);

            if (match && account.username === username) {
              account = match;
              stream.destroy();
              break;
            }

          } catch(err) {
            console.log(`Failed to compare hash: ${err}`);
          }
        }
      });

      stream.on("end", () => {
        account ? resolve(signAccount(account)) : reject({ status: 404, message: 'Account not found' });
      });

      stream.on("close", () => {
        account ? resolve(signAccount(account)) : reject({ status: 404, message: 'Account not found' });
      });
    })
  }
}

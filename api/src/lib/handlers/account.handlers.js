import { AccountService } from "../services/account.service";

export class AccountHandlers {
  static INSTANCE = null;

  static getInstance() {
    if (AccountHandlers.INSTANCE === null) {
      AccountHandlers.INSTANCE = new AccountHandlers();
    }
    return AccountHandlers.INSTANCE;
  }

  constructor(accountsService) {
    this.accountService = accountsService || new AccountService();
  }

  async createAccount(req, res) {
    const payload = req.body;

    return this.accountService.createAccount(payload)
      .then(account => {
        res.status(200);
        res.json(account);
      })
      .catch(err => {
        res.status(err.status);
        res.json(err);
      });
  }

  async deleteAccount(req, res) {
    const payload = req.data ? req.data.id : '';

    return this.accountService.deleteAccount(payload)
      .then(account => {
        res.status(200);
        res.json(account);
      })
      .catch(err => {
        res.status(err.status);
        res.json(err);
      });
  }

  async getAccount(req, res) {
    const payload = req.data ? req.data.id : '';

    return this.accountService.getAccount(payload)
      .then(account => {
        res.status(200);
        res.json(account)
      })
      .catch(err => {
        res.status(err.status);
        res.json(err);
      });
  }

  async authenticateAccount(req, res) {
    const payload = req.body;

    return this.accountService.authenticateAccount(payload)
      .then(accessToken => {
        res.status(200);
        res.json({
          access_token: accessToken
        })
      })
      .catch(err => {
        res.status(err.status);
        res.json(err);
      });
  }
}


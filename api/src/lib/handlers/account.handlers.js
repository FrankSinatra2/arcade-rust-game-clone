import { AccountService } from "../services/account.service";

export class AccountHandlers {
  constructor(accountsService) {
    this.accountService = accountsService || new AccountService();
  }

  createAccount(req, res) {

  }

  deleteAccount(req, res) {

  }

  getAccount(req, res) {
    
  }

  authenticateAccount(req, res) {

  }
}


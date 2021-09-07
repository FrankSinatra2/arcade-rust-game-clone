import express from "express";
import { AccountHandlers } from "../handlers/account.handlers";
import { requireJwt } from "../middleware/auth.middleware";


export const router = express.Router();

router.post('/', AccountHandlers.getInstance().createAccount);
router.post('/auth', AccountHandlers.getInstance().authenticateAccount);

router.delete('/', requireJwt, AccountHandlers.getInstance().deleteAccount);
router.get('/', requireJwt, AccountHandlers.getInstance().getAccount);

// module.exports = router;



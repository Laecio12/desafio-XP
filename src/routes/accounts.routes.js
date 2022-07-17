import express from 'express';
import account from '../controllers/account/index.js';
import validateValue from '../middlewares/account/index.js';

const accountRouter = express.Router();

accountRouter.post('/deposito', validateValue, account.deposit);
accountRouter.post('/saque', validateValue, account.withdraw);
accountRouter.get('/saldo', account.getBalance);

export default accountRouter;

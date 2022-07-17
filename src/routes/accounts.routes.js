import express from 'express';
import account from '../controllers/account/index.js';
import validateDeposit from '../middlewares/account/index.js';

const accountRouter = express.Router();

accountRouter.post('/deposito', validateDeposit, account.deposit);

export default accountRouter;

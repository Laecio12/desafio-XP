import express from 'express';
import account from '../controllers/account/index.js';

const accountRouter = express.Router();

accountRouter.post('/deposito', account.deposit);

export default accountRouter;

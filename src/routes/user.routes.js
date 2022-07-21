import express from 'express';
import userController from '../controllers/user/index.js';
import walletController from '../controllers/wallet/index.js';
import validate from '../middlewares/user/validate.js';
import ensureAuthenticated from '../middlewares/user/ensureAuthenticated.js';
import validateSessionData from '../middlewares/user/validateSessionData.js';

const userRouter = express.Router();

userRouter.post('/', validate, userController.create);
userRouter.post('/login', validateSessionData, userController.createSession);
userRouter.get('/ativos', ensureAuthenticated, walletController.getInvestmentsByUser);
userRouter.get('/ativos/:CodAtivo', ensureAuthenticated, walletController.getInvestmentBySymbolByUser);

export default userRouter;

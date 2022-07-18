import express from 'express';
import investmentController from '../controllers/investment/index.js';
import ensureAuthenticated from '../middlewares/user/ensureAuthenticated.js';

const investmentRouter = express.Router();

investmentRouter.get('/listar', investmentController.getall);
investmentRouter.post('/comprar', ensureAuthenticated, investmentController.purchase);
investmentRouter.post('/vender', ensureAuthenticated, investmentController.sell);

export default investmentRouter;

import express from 'express';
import investmentController from '../controllers/investment/index.js';
import validateQuantity from '../middlewares/investment/validateQuantity.js';
import ensureAuthenticated from '../middlewares/user/ensureAuthenticated.js';

const investmentRouter = express.Router();

investmentRouter.get('/listar', investmentController.getall);
investmentRouter.post('/comprar', ensureAuthenticated, validateQuantity, investmentController.purchase);
investmentRouter.post('/vender', ensureAuthenticated, validateQuantity, investmentController.sell);

export default investmentRouter;

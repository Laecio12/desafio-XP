import express from 'express';
import investmentController from '../controllers/investment/index.js';

const investmentRouter = express.Router();

investmentRouter.post('/comprar', investmentController.purchase);
investmentRouter.post('/vender', investmentController.sell);

export default investmentRouter;

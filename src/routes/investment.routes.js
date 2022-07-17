import express from 'express';
import investmentController from '../controllers/investment/index.js';

const investmentRouter = express.Router();

investmentRouter.post('/comprar', investmentController.purchase);

export default investmentRouter;

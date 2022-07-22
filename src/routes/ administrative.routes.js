import express from 'express';
import administrative from '../controllers/ administrative/index.js';
import validateInvestment from '../middlewares/investment/validateInvestment.js';

const administrativeRouter = express.Router();

administrativeRouter.get('/clientes', administrative.getAllUsers);
administrativeRouter.post('/investimentos/adicionar', validateInvestment, administrative.addInvestment);

export default administrativeRouter;

import express from 'express';
import administrative from '../controllers/ administrative/index.js';
import validateInvestment from '../middlewares/investment/validateInvestment.js';
import validateValue from '../middlewares/investment/validateValue.js';

const administrativeRouter = express.Router();

administrativeRouter.get('/clientes', administrative.getAllUsers);
administrativeRouter.post('/investimentos/adicionar', validateInvestment, administrative.addInvestment);
administrativeRouter.patch('/investimentos/editar/:CodAtivo', validateValue, administrative.editPrice);

export default administrativeRouter;

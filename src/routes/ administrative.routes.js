import express from 'express';
import administrative from '../controllers/ administrative/index.js';

const administrativeRouter = express.Router();

administrativeRouter.get('/clientes', administrative.getAllUsers);

export default administrativeRouter;

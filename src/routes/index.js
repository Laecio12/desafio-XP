import express from 'express';
import ensureAdmin from '../middlewares/administrative/ensureAdmin.js';
import ensureAuthenticated from '../middlewares/user/ensureAuthenticated.js';
import administrativeRouter from './ administrative.routes.js';
import accountRouter from './accounts.routes.js';
import investmentRouter from './investment.routes.js';
import userRouter from './user.routes.js';

const router = express.Router();

router.use('/clientes', userRouter);
router.use('/conta', ensureAuthenticated, accountRouter);
router.use('/investimentos', investmentRouter);
router.use('/admin', ensureAuthenticated, ensureAdmin, administrativeRouter);

export default router;

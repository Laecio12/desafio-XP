import express from 'express';
import ensureAuthenticated from '../middlewares/user/ensureAuthenticated.js';
import accountRouter from './accounts.routes.js';
import investmentRouter from './investment.routes.js';
import userRouter from './user.routes.js';

const router = express.Router();

router.use('/clientes', userRouter);
router.use('/conta', ensureAuthenticated, accountRouter);
router.use('/investimentos', investmentRouter);

export default router;

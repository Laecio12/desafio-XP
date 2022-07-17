import express from 'express';
import userController from '../controllers/user/index.js';
import validate from '../middlewares/user/validate.js';

const userRouter = express.Router();

userRouter.post('/', validate, userController.create);

export default userRouter;

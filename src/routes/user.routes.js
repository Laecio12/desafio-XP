import express from 'express';
import userController from '../controllers/user/index.js';

const userRouter = express.Router();

userRouter.post('/', userController.create);

export default userRouter;

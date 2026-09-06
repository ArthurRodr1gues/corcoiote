import { Router } from 'express';
import { getAllUsers } from '../controllers/user.controller.ts';

const userRouter = Router();

userRouter.get('/', getAllUsers);

export default userRouter;

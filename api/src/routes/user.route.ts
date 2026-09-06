import { Router } from 'express';
import {
  getAllUsers,
  getUserById
} from '../controllers/user.controller.ts';

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);

export default userRouter;

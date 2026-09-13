import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser
} from '../controllers/user.controller.ts';

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);

export default userRouter;

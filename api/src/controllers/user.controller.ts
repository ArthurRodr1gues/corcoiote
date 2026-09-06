import type { Request, Response } from 'express';
import {
  findAllUsers,
  findUserById
} from '../services/user.service.ts';

export function getAllUsers(request: Request, response: Response) {
  const users = findAllUsers();

  response.status(200).json(users);
}

export function getUserById(request: Request, response: Response) {
  const id = request.params.id;

  const user = findUserById(Number(id));

  response.status(200).json(user);
}

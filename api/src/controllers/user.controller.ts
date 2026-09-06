import type { Request, Response } from 'express';
import { findAllUser } from '../services/user.service.ts';

export function getAllUsers(request: Request, response: Response) {
  const users = findAllUser();

  response.status(200).json(users);
}

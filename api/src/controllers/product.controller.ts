import type { Request, Response } from 'express';
import { findAllProducts } from '../services/product.service.ts';

export function getAllProducts(request: Request, response: Response) {
  const products = findAllProducts();

  response.status(200).json(products);
}
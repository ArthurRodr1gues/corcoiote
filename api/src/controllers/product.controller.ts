import type { Request, Response } from 'express';
import { findAllProducts, findProductById } from '../services/product.service.ts';

export function getAllProducts(request: Request, response: Response) {
  const products = findAllProducts();

  response.status(200).json(products);
}

export function getProductById(request: Request, response: Response) {
  const id = request.params.id;

  const product = findProductById(Number(id));

  response.status(200).json(product);
}
import type { Request, Response } from 'express';
import { findAllProducts, findProductById, insertProduct } from '../services/product.service.ts';
import type { CreateProduct } from '../types/product.type.ts';

export function getAllProducts(request: Request, response: Response) {
  const products = findAllProducts();

  response.status(200).json(products);
}

export function getProductById(request: Request, response: Response) {
  const id = request.params.id;

  const product = findProductById(Number(id));

  response.status(200).json(product);
}

export function createProduct(request: Request, response: Response) {
  const { name, price, description } = request.body as CreateProduct;

  const product = insertProduct({ name, price, description });

  response.status(201).json(product);
}
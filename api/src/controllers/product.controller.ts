import type { Request, Response } from 'express';
import {
  findAllProducts,
  findProductById,
  insertProduct,
  modifyProduct,
  removeProduct
} from '../services/product.service.ts';
import type { CreateProduct, UpdateProduct } from '../types/product.type.ts';

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

export function updateProduct(request: Request, response: Response) {
  const id = +request.params.id;
  const data = request.body as UpdateProduct;

  const product = modifyProduct(id, data);

  response.status(200).json(product);
}

export function deleteProduct(request: Request, response: Response) {
  const id = +request.params.id;

  removeProduct(id);

  response.status(204).send();
}
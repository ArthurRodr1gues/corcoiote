import products from '../mocks/product.mock.ts';
import type { CreateProduct, Product } from '../types/product.type.ts';

export function findAllProducts() {
  return products;
}

export function findProductById(id: number) {
  const product = products.find(product => product.id === id);

  if (!product)
    throw new Error(`Produto de id ${id} não encontrado.`);

  return product;
}

export function insertProduct({ name, price, description }: CreateProduct) {
  const id = products[products.length - 1].id + 1;

  const product: Product = {
    id,
    name,
    price,
    description
  };

  products[products.length] = product;

  return product;
}
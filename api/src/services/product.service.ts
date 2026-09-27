import products from '../mocks/product.mock.ts';
import type { CreateProduct, UpdateProduct, Product } from '../types/product.type.ts';

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

export function modifyProduct(
  id: number,
  { name, price, description }: UpdateProduct
) {
  const product = findProductById(id);

  if (name !== undefined && name !== '') product.name = name;
  if (price !== undefined) product.price = price;
  if (description !== undefined) product.description = description;

  return product;
}

export function removeProduct(id: number) {
  findProductById(id);

  for (let i = 0; i < products.length; i++) {
    if (id === products[i].id) products.splice(i, 1);
  }
}
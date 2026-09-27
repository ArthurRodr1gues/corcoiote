import products from '../mocks/product.mock.ts';

export function findAllProducts() {
  return products;
}

export function findProductById(id: number) {
  const product = products.find(product => product.id === id);

  if (!product)
    throw new Error(`Produto de id ${id} não encontrado.`);

  return product;
}
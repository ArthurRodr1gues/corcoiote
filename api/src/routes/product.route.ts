import { Router } from 'express';
import { getAllProducts, getProductById, createProduct } from '../controllers/product.controller.ts';

const productRouter = Router();

productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProductById);
productRouter.post('/', createProduct);

export default productRouter;
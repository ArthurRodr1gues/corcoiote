import { Router } from 'express';
import { getAllProducts } from '../controllers/product.controller.ts';

const productRouter = Router();

productRouter.get('/', getAllProducts);

export default productRouter;
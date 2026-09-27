import express from 'express';
import userRouter from './routes/user.route.ts';
import productRouter from './routes/product.route.ts';

const server = express();

server.use(express.json());

server.use('/users', userRouter);
server.use('/products', productRouter);

server.listen(3000);

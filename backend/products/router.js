import express from 'express';
import { getAllProducts, getOneProduct } from './controllers.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getOneProduct);
export default router;

import express from 'express';
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController.js';
import { checkFile, updateCheckFile } from '../middleware/fileCheck.js';


const router = express.Router();



router.route('/api/products').get(getProducts).post(checkFile, addProduct);
router.route('/api/products/:id').get(getProduct).patch(updateCheckFile, updateProduct).delete(deleteProduct);


export default router;








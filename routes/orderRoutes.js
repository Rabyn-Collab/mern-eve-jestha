import express from 'express';
import { createOrder, getOrders } from '../controllers/OrderController.js';
import { checkUser } from '../middleware/authCheck.js';



const router = express.Router();


router.route('/api/orders').get(checkUser, getOrders).post(checkUser, createOrder)




export default router;
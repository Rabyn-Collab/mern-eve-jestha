import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';
import { checkImageFile } from '../middleware/fileCheck.js';




const router = express.Router();



router.route('/api/users/login').post(loginUser)
router.route('/api/users/register').post(checkImageFile, registerUser)


export default router;
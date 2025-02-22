import express from 'express';
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js';
import { createUser, getAllUsers } from '../controllers/userController.js';

const router=express.Router();


router.route('/').post(createUser).get(authenticate,authorizeAdmin,getAllUsers)






export default router;
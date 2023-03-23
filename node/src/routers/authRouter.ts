import { Router } from 'express';
import { signupFn } from '../controllers/userController.js';
const router = Router();
router.post('/signup', signupFn);
router.post('/login');
router.get('/loginAutomatically');
export default router;

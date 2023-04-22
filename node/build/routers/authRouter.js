import { Router } from 'express';
import { signupFn, loginFn } from '../controllers/authController.js';
const router = Router();
router.post('/signup', signupFn);
router.post('/login', loginFn);
router.get('/loginAutomatically');
export default router;
//# sourceMappingURL=authRouter.js.map
import { Router } from 'express';
import { AuthController } from '../controllers/authController';

const authController = new AuthController();
export const authRouter = Router();

authRouter.get('/login', (req, res) => authController.authLogin(req, res));
authRouter.get('/register', (req, res) => authController.authRegister(req, res));


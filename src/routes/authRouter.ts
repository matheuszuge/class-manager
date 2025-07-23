import { Router } from "express";
import { AuthController } from "../controllers/authController";

const authController = new AuthController();
export const authRouter = Router();

authRouter.post("/login", (req, res) => authController.authLogin(req, res));

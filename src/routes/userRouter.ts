import { Router } from "express";
import { UserController } from "../controllers/userController";

const userController = new UserController();
export const userRouter = Router();

userRouter.get("/", (req, res) => userController.getAll(req, res));
userRouter.post("/", (req, res) => userController.create(req, res));
userRouter.put("/:id", (req, res) => userController.update(req, res));
userRouter.delete("/:id", (req, res) => userController.delete(req, res));

import { Router } from "express";
import { prisma } from "../libs/prisma";
import { authRouter } from "./authRouter";
import { userRouter } from "./userRouter";
import { classRouter } from "./classRouter";

export const mainRouter = Router();
mainRouter.use("/auth", authRouter);
mainRouter.use("/users", userRouter);
mainRouter.use("/class", classRouter);

mainRouter.get("/ping", (req, res) => {
  res.json({ pong: true });
});

mainRouter.get("/teste", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

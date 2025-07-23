import { Router } from "express";
import { authRouter } from "./authRouter";
import { userRouter } from "./userRouter";
import { classRouter } from "./classRouter";
import { interceptor } from "../middlewares/interception";
import { authorization } from "../middlewares/authorization";
import { notFoundRequest } from "./errorHandler";

export const mainRouter = Router();
mainRouter.use("/auth", authRouter);
mainRouter.use("/user", authorization, userRouter);
mainRouter.use("/class", authorization, classRouter);

mainRouter.get("/ping", interceptor, (req, res) => {
    res.json({ pong: true });
});

mainRouter.use(notFoundRequest);

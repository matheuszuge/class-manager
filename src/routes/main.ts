import { Router } from "express";
import { authRouter } from "./authRouter";
import { userRouter } from "./userRouter";
import { classRouter } from "./classRouter";
import { loginRouter } from "./loginRouter";
import { interceptor } from "../middlewares/interception";
import { notFoundRequest, errorHandler } from "./errorHandler";

export const mainRouter = Router();
mainRouter.use("/auth", authRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/class", classRouter);
mainRouter.use("/login", loginRouter);

mainRouter.get("/ping", interceptor, (req, res) => {
    res.json({ pong: true });
});


mainRouter.use(notFoundRequest);
mainRouter.use(errorHandler);
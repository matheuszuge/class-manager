import { Router } from "express";
import { ClassController } from "../controllers/classController";

//const classService = new ClassService();
//const classController = new ClassController(classService);
const classController = new ClassController();
export const classRouter = Router();

classRouter.get("/", (req, res) => classController.getAll(req, res));
classRouter.get("/:id", (req, res) => classController.getById(req, res));
classRouter.post("/", (req, res) => classController.create(req, res));
classRouter.put("/:id", (req, res) => classController.update(req, res));
classRouter.delete("/:id", (req, res) => classController.delete(req, res));

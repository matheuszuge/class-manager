import { Request, Response } from "express";
import { ClassService } from "../services/classService";

export class ClassController {
    private classService;
    constructor() {
        this.classService = new ClassService();
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const classData = await this.classService.getById(+id);
            res.status(201).json(classData);
        } catch (error) {
            console.error("Error fetching class by ID:", error);
            res.status(500).json({ error: "Failed to fetch class" });
        }
    }

    async create(req: Request, res: Response) {
        const { status, title } = req.body;
        const data = { status, title };
        try {
            const newClass = await this.classService.create(data);
            res.status(201).json({
                mensagem: "Sala criada com sucesso",
                newClass,
            });
        } catch (error) {
            console.error("Error creating class:", error);
            res.status(500).json({ error: "Failed to create class" });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const newClass = await this.classService.getAll();
            res.status(201).json(newClass);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Error to find classes" });
        }
    }

    async update(req: Request, res: Response) {
        const { status, title } = req.body;
        const { id } = req.params;
        const data: any = {status, title};
        try {
            const newClass = await this.classService.update(Number(id), data);
            res.status(201).json({
                mensagem: "Sala editada com sucesso",
                newClass,
            });
        } catch (error) {
            console.error("Error updating class:", error);
            res.status(500).json({ error: "Failed to update class" });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deletedClass = await this.classService.delete(+id);
            res.status(201).json(deletedClass);
        } catch (error) {
            console.error("Error deleting class:", error);
            res.status(500).json({ error: "Failed to delete class" });
        }
    }
}

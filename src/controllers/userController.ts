import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
    private userService;
    constructor() {
        this.userService = new UserService();
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const userData = await this.userService.getById(+id);
            //TODO: Esta logica será movida para o service e trataremos errorhandler by interceptors
            // if (!classData) {
            //     return res.status(404).json({ error: "Class not found" });
            // }
            res.status(201).json(userData);
        } catch (error) {
            console.error("Error fetching user by ID:", error);
            res.status(500).json({ error: "Failed to fetch user" });
        }
    }

    async create(req: Request, res: Response) {
        const { status, role, name, classRoom, email } = req.body;
        const data = { status, role, name, class: classRoom, email };
        try {
            const newuser = await this.userService.create(data);
            res.status(201).json({
                mensagem: "User criado com sucesso",
                newuser,
            });
        } catch (error) {
            console.error("Error creating user:", error);
            res.status(500).json({ error: "Failed to create user" });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const newuser = await this.userService.getAll();
            res.status(201).json(newuser);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Error to find useres" });
        }
    }

    async update(req: Request, res: Response) {
        const { status, role, name, classRoom, email } = req.body;
        const { id } = req.params;
        const data: any = { status, role, name, classRoom, email };

        try {
            const newuser = await this.userService.update(Number(id), data);
            res.status(201).json({
                mensagem: "User editado com sucesso",
                newuser,
            });
        } catch (error) {
            console.error("Error updating user:", error);
            res.status(500).json({ error: "Failed to update user" });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            this.userService.delete({
                where: { id: Number(id) },
            });
            res.status(201).json({ mensagem: "Sala deletada com sucesso" });
        } catch (error) {
            console.error("Error deleting user:", error);
            res.status(500).json({ error: "Failed to delete user" });
        }
    }
}

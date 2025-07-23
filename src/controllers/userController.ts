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
            res.status(201).json(userData);
        } catch (error) {
            console.error("Error fetching user by ID:", error);
            res.status(500).json({ error: "Failed to fetch user" });
        }
    }

    async create(req: Request, res: Response) {
        const { status, role, password, name, classroom, email } = req.body;
        const data = { status, role, password, name, classroom, email };
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
            res.status(500).json({ error: "Error to find users" });
        }
    }

    async update(req: Request, res: Response) {
        const { status, role, name, password, classRoom, email } = req.body;
        const { id } = req.params;
        const data: any = {
            status,
            role,
            password,
            name,
            classRoom,
            email,
        };

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
            const deletedUser = await this.userService.delete(+id);
            res.status(201).json(deletedUser);
        } catch (error) {
            console.error("Error deleting user:", error);
            res.status(500).json({ error: "Failed to delete user" });
        }
    }
}

import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
  private userService;
  constructor() {
    this.userService = new UserService();
  }

  async create(req: Request, res: Response) {
    const { status, title } = req.body;
    const data = { status, title };
    try {
      const newuser = await this.userService.create(data);
      res.status(201).json({ mensagem: "Sala criada com sucesso", newuser });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Failed to create user" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const newuser = await this.userService.getAll();
      res.status(200).json(newuser);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error to find useres" });
    }
  }

  async update(req: Request, res: Response) {
    const { status, title } = req.body;
    const { id } = req.params;
    const data: any = {};
    if (status !== undefined) data.status = status;
    if (title !== undefined) data.title = title;

    if (Object.keys(data).length === 0) {
      return res.status(400).json({ error: "Nenhum campo para atualizar" });
    }

    try {
      const newuser = await this.userService.update(Number(id), data);
      res.status(201).json({ mensagem: "Sala editada com sucesso", newuser });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Failed to update user" });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deleteduser = this.userService.delete({
        where: { id: Number(id) },
      });
      res.status(200).json({ mensagem: "Sala deletada com sucesso" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Failed to delete user" });
    }
  }
}

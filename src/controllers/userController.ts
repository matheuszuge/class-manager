import { prisma } from "../libs/prisma";
import { Request, Response } from "express";

export class UserController {
  async create(req: Request, res: Response) {
    const { status, role, name, class: userClass, email } = req.body;
    const data = { status, role, name, class: userClass, email };

    if (!status || !role || !name || !userClass || !email) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios" });
    }
    try {
      const newUser = await prisma.user.create({ data });
      res.status(200).json({ mensagem: "Usuario criado com sucesso", newUser });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Failed to create user" });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    // Extrai apenas os campos enviados
    const { status, role, name, class: userClass, email } = req.body;
    const data: any = {};
    if (status !== undefined) data.status = status;
    if (role !== undefined) data.role = role;
    if (name !== undefined) data.name = name;
    if (userClass !== undefined) data.class = userClass;
    if (email !== undefined) data.email = email;

    if (Object.keys(data).length === 0) {
      return res.status(400).json({ error: "Nenhum campo para atualizar" });
    }

    try {
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data,
      });
      res
        .status(200)
        .json({ mensagem: "Usuario editado com sucesso", updatedUser });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Failed to update user" });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const deletedUser = await prisma.user.delete({
        where: { id: Number(id) },
      });
      res
        .status(200)
        .json({ mensagem: "Usuario deletado com sucesso", deletedUser });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Failed to delete user" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error to find users" });
    }
  }
}

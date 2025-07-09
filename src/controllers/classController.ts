import { prisma } from "../libs/prisma";
import { Request, Response } from "express";

export class ClassController {
  async getAll(req: Request, res: Response) {
    try {
      const newClass = await prisma.sala.findMany();
      res.status(200).json(newClass);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error to find classes" });
    }
  }

  async create(req: Request, res: Response) {
    const { status, title } = req.body;
    const data = { status, title };
    try {
      const newClass = await prisma.sala.create({ data });
      res.status(200).json({ mensagem: "Sala criada com sucesso", newClass });
    } catch (error) {
      console.error("Error creating class:", error);
      res.status(500).json({ error: "Failed to create class" });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { status, title } = req.body;
    const data: any = {};

    if (status !== undefined) data.status = status;
    if (title !== undefined) data.title = title;

    if (Object.keys(data).length === 0) {
      return res.status(400).json({ error: "Nenhum campo para atualizar" });
    }

    try {
      const updatedClass = await prisma.sala.update({
        where: { id: Number(id) },
        data,
      });
      res
        .status(200)
        .json({ mensagem: "Sala editada com sucesso", updatedClass });
    } catch (error) {
      console.error("Error updating class:", error);
      res.status(500).json({ error: "Failed to update class" });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedClass = await prisma.sala.delete({
        where: { id: Number(id) },
      });
      res
        .status(200)
        .json({ mensagem: "Sala deletada com sucesso", deletedClass });
    } catch (error) {
      console.error("Error deleting class:", error);
      res.status(500).json({ error: "Failed to delete class" });
    }
  }
}

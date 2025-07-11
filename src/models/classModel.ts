import { prisma } from "../libs/prisma";
import { BaseModel } from "./baseModel";

export class ClassModel implements BaseModel {
  private db: typeof prisma.classRoom;
  constructor() {
    this.db = prisma.classRoom;
  }
  async create(data: any): Promise<any> {
    return await this.db.create({ data });
  }
  async update(id: number, data: any): Promise<any> {
    return await this.db.update({ where: { id }, data });
  }
  async getAll(): Promise<any[]> {
    return await this.db.findMany();
  }
  async getById(id: number): Promise<any> {
    return await this.db.findUnique({ where: { id } });
  }
  async delete(id: number): Promise<any> {
    return await this.db.delete({ where: { id } });
  }
}

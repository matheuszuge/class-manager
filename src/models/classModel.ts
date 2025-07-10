import { prisma } from "../libs/prisma";
import { BaseModel } from "./baseModel";

export class ClassModel implements BaseModel {
  private db;
  constructor() {
    this.db = prisma.classRoom;
  }
  async create(data: any): Promise<any> {
    await this.db.create({ data });
    return data;
  }
  async update(id: number, data: any): Promise<any> {}
  async findAll(): Promise<any[]> {
    return [];
  }
  async findById(id: number): Promise<any> {}
  async delete(id: number): Promise<any> {}
}

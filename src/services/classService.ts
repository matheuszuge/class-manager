import { ClassModel } from "../models/classModel";

export class ClassService {
  private classModel;
  constructor() {
    this.classModel = new ClassModel();
    // this.classModel.
  }
  async getById(id: number): Promise<any> {
    return this.classModel.getById(id);
  }

  async create(data: any): Promise<any> {
    return this.classModel.create(data);
  }

  async getAll(): Promise<any> {
    return await this.classModel.getAll();
  }

  async update(id: number, data: any): Promise<any> {
    return this.classModel.update(id, data);
  }

  async delete(id: number): Promise<any> {
    const existingClass = await this.classModel.getById(id);
    if (!existingClass) {
      throw new Error("Class not found");
    }
    await this.classModel.delete(id);
    return existingClass;
  }
}

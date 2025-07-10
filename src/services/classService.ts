import { ClassModel } from "../models/classModel";

export class ClassService {
  private classModel;
  constructor() {
    this.classModel = new ClassModel();
    // this.classModel.
  }
  async create(data: any): Promise<any> {
    return this.classModel.create(data);
  }

  async findAll(): Promise<any> {
    return this.classModel.findAll();
  }

  async update(id: number, data: any): Promise<any> {
    return this.classModel.update(id, data);
  }

  async delete(data: any): Promise<any> {
    return this.classModel.delete(data);
  }
}

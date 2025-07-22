import { ClassModel } from "../models/classModel";

export class ClassService {
    private classModel;
    constructor() {
        this.classModel = new ClassModel();
    }
    
    async create(data: any): Promise<any> {
        if (!data) throw new Error("Class data is required");
        return this.classModel.create(data);
    }

    async getById(id: number): Promise<any> {
        if (!id) throw new Error("Class ID is required");
        const ClassRoom = this.classModel.getById(id);
        if (!ClassRoom) throw new Error("Class not found");
        return ClassRoom;
    }
    
    async getAll(): Promise<any> {
        return await this.classModel.getAll();
    }

    async update(id: number, data: any): Promise<any> {
        const updatedClass = this.classModel.update(id, data);
        if (!updatedClass) throw new Error("Class not found");
        return updatedClass;
    }

    async delete(id: number): Promise<any> {
        const existingClass = await this.classModel.getById(id);
        if (!existingClass) throw new Error("Class not found");
        await this.classModel.delete(id);
        return existingClass;
    }
}

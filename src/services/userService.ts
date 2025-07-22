import { UserModel } from "../models/userModel";

export class UserService {
    private userModel;
    constructor() {
        this.userModel = new UserModel();
    }

    async create(data: any): Promise<any> {
        if (!data) throw new Error("User data is required");
        return this.userModel.create(data);
    }
    async getById(id: number): Promise<any> {
        if (!id) throw new Error("User ID is required");
        const userData = this.userModel.getById(id);
        if (!userData) throw new Error("User not found");
        return userData;
    }

    async getAll(): Promise<any> {
        return this.userModel.getAll();
    }
    
    async update(id: number, data: any): Promise<any> {
        const updatedUser = this.userModel.update(id, data);
        if (!updatedUser) throw new Error("User not found");
        return updatedUser;
    }

    async delete(id: number): Promise<any> {
        const existingUser = await this.userModel.getById(id);
        if (!existingUser) throw new Error("User not found");
        await this.userModel.delete(id);
        return existingUser;
    }
}

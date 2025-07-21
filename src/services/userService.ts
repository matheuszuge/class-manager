import { UserModel } from "../models/userModel";

export class UserService {
    private userModel;
    constructor() {
        this.userModel = new UserModel();
    }

    async create(data: any): Promise<any> {
        return this.userModel.create(data);
    }

    async getAll(): Promise<any> {
        return this.userModel.getAll();
    }

    async getById(id: number): Promise<any> {
        if (!id) {
            throw new Error("Class ID is required");
        }
        const userData = this.userModel.getById(id);

        if (!userData) {
            throw new Error("User not found");
        }

        return userData;
    }

    async update(id: number, data: any): Promise<any> {
        return this.userModel.update(id, data);
    }

    async delete(data: any): Promise<any> {
        return this.userModel.delete(data);
    }
}

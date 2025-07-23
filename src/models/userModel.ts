import { prisma } from "../libs/prisma";
import { BaseModel } from "./baseModel";

export class UserModel implements BaseModel {
    private db: typeof prisma.user;
    constructor() {
        this.db = prisma.user;
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
        await this.db.delete({ where: { id } });
        return { message: "User deleted successfully" };
    }

    async authLogin(email: string, password: string): Promise<any> {
        const user = await this.db.findUnique({ where: { email } });
        if (!user) throw new Error("User not found");
        if (user.password !== password) throw new Error("Invalid password");
        return user;
    }
}

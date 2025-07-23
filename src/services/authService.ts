import { UserModel } from "../models/userModel";
import "dotenv/config";
import jwt from "jsonwebtoken";

export class AuthService {
    private UserModel;
    constructor() {
        this.UserModel = new UserModel();
    }
    async authLogin(email: string, password: string): Promise<any> {
        if (!email || !password)
            throw new Error("Email and password are required");

        const user = await this.UserModel.authLogin(email, password);
        const id = user.id;

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET environment variable is not defined");
        }
        const token = jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: parseInt(process.env.JWT_EXPIRES || "3600"),
        });

        if (!user) throw new Error("Invalid email or password");
        console.log("usuario logado com sucesso", user);
        return { token };
    }
}

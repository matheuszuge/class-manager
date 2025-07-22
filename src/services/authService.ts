import { UserModel } from "../models/userModel";

export class AuthService {
    private UserModel;
    constructor() {
        this.UserModel = new UserModel();
    }
    /**
     * Authenticates a user with email and password.
     * @param email - User's email.
     * @param password - User's password.
     * @returns User data if authentication is successful.
     * @throws Error if email or password is missing or invalid.
     */
    async authLogin(email: string, password: string): Promise<any> {
        if (!email || !password) throw new Error("Email and password are required");
        const user = await this.UserModel.authLogin(email, password);
        if (!user) throw new Error("Invalid email or password");
        return user;
    }
}


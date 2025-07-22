import { Request, Response } from "express";
import { AuthService } from "../services/authService";

export class AuthController {
    private AuthService;
    constructor() {
        this.AuthService = new AuthService();
    }

    async authAuth(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const AuthLogin = await this.AuthService.authLogin(email, password);
            res.status(201).json(AuthLogin);
        } catch (error) {
            console.error("Error fetching Auth by ID:", error);
            res.status(500).json({ error: "Failed to fetch Auth" });
        }
    }
}

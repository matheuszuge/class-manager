import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const authorization: RequestHandler = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    const secret = process.env.JWT_SECRET;

    if (!token || !secret) {
        return res.status(401).json({ error: "Token ou segredo JWT ausente" });
    }
    const autorization = jwt.verify(token, secret); 
    if (autorization) {
        next();
    } else {
        return res.status(401).json({ error: "Token ou segredo JWT ausente" });
    }
};

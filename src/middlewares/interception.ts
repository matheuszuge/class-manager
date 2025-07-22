import type { RequestHandler } from "express";

export const interceptor: RequestHandler = (req, res, next) => {
    let logged = true;
    
    if (logged) {
        console.log("Usuário logado");
        next();
    } else {    
        console.log("Usuário não logado");
        res.status(401).json({ error: "Usuário não logado" });
    }
};



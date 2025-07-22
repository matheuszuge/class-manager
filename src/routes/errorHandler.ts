import { RequestHandler, ErrorRequestHandler } from "express";

export const notFoundRequest: RequestHandler =(req, res) => {
  res.status(404).json({ error: "Route Not Found" });
}

export const errorHandler: ErrorRequestHandler =(err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Error" });
}

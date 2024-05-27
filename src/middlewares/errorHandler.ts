import { Request, Response, NextFunction } from "express";
import CustomError from "../interfaces/CustomError";

export default function errorHandler(
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error) {
    if (error.code) {
      console.log(`${error.name}: ${error.description}`);
      res.setHeader("Content-Type", "application/json");
      return res.status(error.code).json({ error: error.message });
    } else {
      res.setHeader("Content-Type", "application/json");
      return res.status(500).json({ error: "Unexpected error" });
    }
  }
  next();
}

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      req.isAuth = false;
    }
    // TODO: handle auth
  } catch (error) {
    console.log(error);
  }
};

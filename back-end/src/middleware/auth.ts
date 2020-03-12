import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import config from "../config/config";
import IUser from "../http/interfaces/userInterface";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      req.isAuth = false;
      return next();
    }

    const token = authHeader.split(" ")[1];
    if (!token || token === "") {
      req.isAuth = false;
      return next();
    }

    const decodedToken: any = jwt.verify(token, config.jwtSecret);
    if (!decodedToken) {
      req.isAuth = false;
      return next();
    }

    req.isAuth = true;
    req.userId = decodedToken.foundUser._id;
    next();
  } catch (error) {
    console.log(error);
    req.isAuth = false;
    return next();
  }
};

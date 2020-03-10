import Validator from "./validator";
import { Request, Response, NextFunction } from "express";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const rules = {
    username: "required|string|min:4|max:10",
    email: "required|string",
    password: "required|string|min:8"
  };

  const validator = new Validator(data, rules);
  if (validator.passes()) {
    next();
  }
  res.status(200).send(validator.errors);
};

import { Request, Response, NextFunction } from "express";
import Validator from "./validator";

import transformErrors from "../transformers/errorTransformer";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const rules = {
    username: "required|string|min:4|max:10",
    email: "required|email",
    password: "required|string|min:8|max:20"
  };

  const validation = new Validator(data, rules);
  if (validation.fails()) {
    res.status(200).send(transformErrors(validation.errors));
  } else {
    next();
  }
};

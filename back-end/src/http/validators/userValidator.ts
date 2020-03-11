import { Request, Response, NextFunction } from "express";
import Validator from "./validator";
import "./customValidators";

import transformErrors from "../transformers/errorTransformer";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const rules = {
    username: "required|string|min:4|max:10|username_available",
    email: "required|email|email_available",
    password: "required|string|min:8|max:20"
  };

  const validation = new Validator(data, rules);
  const passes = () => {
    next();
  };

  const fails = () => {
    res.status(200).send(transformErrors(validation.errors));
  };

  validation.checkAsync(passes, fails);
};

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const rules = {
    username: "required|string|min:4|max:10|username_exists",
    password: "required|string|min:8|max:20"
  };

  const validation = new Validator(data, rules);
  const passes = () => {
    next();
  };

  const fails = () => {
    res.status(200).send(transformErrors(validation.errors));
  };

  validation.checkAsync(passes, fails);
};

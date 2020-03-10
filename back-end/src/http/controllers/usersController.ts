import { Request, Response, NextFunction } from "express";
import * as usersRepository from "../repositories/usersRepository";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await usersRepository.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password } = req.body;
    const result = await usersRepository.save(username, email, password);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

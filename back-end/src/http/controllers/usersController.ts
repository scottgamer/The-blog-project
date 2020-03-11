import { Request, Response, NextFunction } from "express";

// TODO: delete and send to services
import * as usersRepository from "../repositories/usersRepository";
import * as usersService from "../services/usersService";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await usersRepository.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;
    const result = await usersService.signUp(user);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

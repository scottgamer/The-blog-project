import { Request, Response, NextFunction } from "express";

import * as usersService from "../services/usersService";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await usersService.getUsers();
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

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;
    const result = await usersService.login(user);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    checkIsAUth(req.isAuth);

    const userId = req.params.id;
    const result = await usersService.getUser(userId);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    checkIsAUth(req.isAuth);

    const userId = req.params.id;
    const result = await usersService.deleteUser(userId);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

const checkIsAUth = (isAuth: boolean) => {
  if (!isAuth) {
    throw new Error("Unauthorized");
  }
};

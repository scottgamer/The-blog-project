import { Request, Response, NextFunction } from "express";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send("Getting users");
};

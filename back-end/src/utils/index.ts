import { Router, Request, Response, NextFunction } from "express";

type Wrapper = (router: Router) => void;

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

interface IRoute {
  path: string;
  method: string;
  handler: Handler | Handler[];
}

export const applyMiddleware = (wrappers: Wrapper[], router: Router) => {
  for (const wrapper of wrappers) {
    wrapper(router);
  }
};

export const applyRoutes = (routes: IRoute[], router: Router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    (router as any)[method](path, handler);
  }
};

import { Request, Response, NextFunction } from "express";

export const asyncHandler = (routerFunction: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await routerFunction(req, res);
    } catch (error) {
      next(error);
    }
  };
};

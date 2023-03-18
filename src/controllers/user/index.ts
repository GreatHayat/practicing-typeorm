import { Request, Response } from "express";
import { userReporitory } from "../../models";

export const createUser = async (req: Request, res: Response) => {
  const {
    body: { username, email, gender },
  } = req;

  const user = await userReporitory.create({ username, email, gender });
  const response = await userReporitory.save(user);

  res.status(200).send({ success: true, user: response });
};

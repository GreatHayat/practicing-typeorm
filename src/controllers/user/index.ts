import { Request, Response } from "express";
import { userReporitory } from "../../models";

export const createUser = async (req: Request, res: Response) => {
  const {
    body: { username, email, gender },
  } = req;

  const user = await userReporitory.create({ username, email, gender });
  const response = await userReporitory.save(user);

  res.status(200).json({ success: true, user: response });
};

export const updateUser = async (req: Request, res: Response) => {
  const {
    params: { id },
    body: userPayload,
  } = req;

  const userId: number = parseInt(id);
  const user = await userReporitory.findOneBy({ id: userId });

  if (!user) {
    return res.status(404).json({ error: true, message: "User not found" });
  }

  const response = await userReporitory.merge(user, userPayload);
  res.status(200).json({ success: true, user: response });
};

export const deleteUser = async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;

  const userId: number = parseInt(id);
  const user = await userReporitory.delete({ id: userId });

  if (user.affected === 0) {
    return res.status(404).json({ error: true, message: "User not found" });
  }

  res.status(200).json({ message: "User deleted successfully" });
};

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await userReporitory.find();
  res.status(200).json({ success: true, users });
};

export const getUserById = async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;

  const userId: number = parseInt(id);
  const user = await userReporitory.findOneBy({ id: userId });

  if (!user) {
    return res.status(404).json({ error: true, message: "User not found" });
  }
  res.status(200).json({ success: true, user });
};

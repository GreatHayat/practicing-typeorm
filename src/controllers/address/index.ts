import { Request, Response } from "express";
import { addressRepository } from "../../models";

export const createAddress = async (req: Request, res: Response) => {
  const {
    body: { address },
  } = req;

  const addressData = await addressRepository.create({ address });
  const response = await addressRepository.save(addressData);
  res.status(200).json({ success: true, address: response });
};

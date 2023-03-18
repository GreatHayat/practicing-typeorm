import { AppDataSource } from "./data-source";
import { Address } from "./Address";
import { User } from "./User";

export const userReporitory = AppDataSource.getRepository(User);
export const addressRepository = AppDataSource.getRepository(Address);

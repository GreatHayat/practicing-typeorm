import { AppDataSource } from "./data-source";
import { User } from "./User";

export const userReporitory = AppDataSource.getRepository(User);

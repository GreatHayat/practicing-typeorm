import { AppDataSource } from "./data-source";
import { Address } from "./Address";
import { User } from "./User";
import { Post } from "./Post";

export const userReporitory = AppDataSource.getRepository(User);
export const addressRepository = AppDataSource.getRepository(Address);
export const postRepository = AppDataSource.getRepository(Post);

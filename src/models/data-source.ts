import "reflect-metadata";
import { DataSource } from "typeorm";
import { Address } from "./Address";
import { Post } from "./Post";
import { User } from "./User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "khizar123",
  database: "typeorm_learning_db",
  synchronize: true,
  logging: false,
  entities: [User, Address, Post],
  migrations: [],
  subscribers: [],
});

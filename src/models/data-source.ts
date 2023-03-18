import "reflect-metadata";
import { DataSource } from "typeorm";
import { Address } from "./Address";
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
  entities: [User, Address],
  migrations: [],
  subscribers: [],
});

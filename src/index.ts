import express, { Application } from "express";
import { AppDataSource } from "./models/data-source";
import routes from "./routes";

// Database initialization
AppDataSource.initialize()
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(`Couldn't connected to DB, ${error}`));

const app: Application = express();
app.use(express.json());

app.use("/api", routes);

const PORT = 5001;
app.listen(PORT, () => console.log(`App is listining on port ${PORT}`));

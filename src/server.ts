import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/db";
import router from "./routes/router";
const { errorHandler } = require("./middlware/error-middleware");

dotenv.config();

connectDB();

const app: Express = express();
const port = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api/appointments", router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

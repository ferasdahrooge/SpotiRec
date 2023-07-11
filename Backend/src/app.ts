import express, { Application, NextFunction, Request, Response } from "express";
import { Server } from "http";
import bodyParser from "body-parser";

const app: Application = express();
const PORT = 8080;
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
  bodyParser.json()
);

app.post("/text/", (req: Request, res: Response, next: NextFunction) => {
  const { data } = req.body;
  return res.status(200).json({
    message: "Success",
    data: data,
  });
});

const server: Server = app.listen(PORT, () => {
  console.log("Server is listening on port 8080");
});

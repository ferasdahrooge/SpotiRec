import express, { NextFunction, Request, Response } from "express";

const app = express();
const PORT = 8080;
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is listening on port 8080");
});

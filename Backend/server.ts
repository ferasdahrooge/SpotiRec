import express, { Express, Request, Response } from "express";
const PORT = 8000;
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log("Server Running"));

import express, { Request, Response } from "express";

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/api/data", (req: Request, res: Response) => {
  console.log(req.body);
  return res.sendStatus(200);
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

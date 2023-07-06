import express, { NextFunction, Request, Response } from "express";

const app = express();
const PORT = 8080;

app.use(express.json());

function handleGetRequest(req: Request, res: Response, next: NextFunction) {
  console.log(req.params);
  next();
}

function handleGetValue(req: Request, res: Response, next: NextFunction) {
  console.log(req.params.textId);
  return res.sendStatus(200);
}

app.get("/api/data/:textId", [handleGetRequest as any, handleGetValue]);

app.route(/abc/).post((req: Request, res: Response) => {
  return res.send("POST ");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

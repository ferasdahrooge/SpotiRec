import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/data", (req, res) => {
  console.log(req.body);
  return res.sendStatus(200);
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

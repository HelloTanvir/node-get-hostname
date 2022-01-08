import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send(req.hostname);
});

const PORT = process.env.PORT || 5000;
app.listen(+PORT, () => {
  console.log(`app is running on port: ${PORT}`);
});

// called when closing the server (when pressing ctrl + c)
process.on("SIGINT", () => {
  console.log("server stopped");
  process.exit(0);
});

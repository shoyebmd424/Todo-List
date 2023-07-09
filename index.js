import Express from "express";
import dotenv from "dotenv";
import DBConnect from "./DBConnection.js";
import TodoRouter from "./Router/TOdo.js";
import cors from "cors";
import path from "path";
dotenv.config();
const __dirname = path.resolve();
const app = Express();
// middlewares
app.use(Express.json());
app.use(cors());
app.use(Express.static(path.join(__dirname, "./client/build")));

// all API
app.use("/", TodoRouter);

// app.get("/", (req, res) => {  git@github.com:shoyebmd424/Todo-List.git
//   res.send("Server is running");
// });
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
  DBConnect();
  console.log("server is running on port " + PORT);
});

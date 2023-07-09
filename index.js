import Express from "express";
import dotenv from "dotenv";
import DBConnect from "./DBConnection.js";
import TodoRouter from "./Router/TOdo.js";
import cors from "cors";
import path from "path";
dotenv.config();
const PORT = process.env.PORT || 8080;
const __dirname = path.resolve();
const app = Express();
// middlewares
app.use(Express.json());
app.use(cors());
app.use(Express.static(path.join(__dirname, "./client/build")));

// all API
app.use("/api", TodoRouter);

// app.get("/", (req, res) => {
//   res.send("Server is running");
// });
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, (req, res) => {
  DBConnect();
  console.log("server is running on port " + PORT);
});

import Express from "express";
import {
  deleteItem,
  getAllItem,
  getOneItem,
  saveItem,
  updateItem,
} from "../Controller/TodoController.js";
const TodoRouter = Express.Router();

TodoRouter.post("/save", saveItem);
TodoRouter.put("/update/:id", updateItem);
TodoRouter.get("/", getAllItem);
TodoRouter.get("/:id", getOneItem);
TodoRouter.delete("/delete/:id", deleteItem);
export default TodoRouter;

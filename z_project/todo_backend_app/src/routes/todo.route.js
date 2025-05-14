import { Router } from "express";
import { createTodo, displayAllTodo, deleteATodo, updateTodo } from "../controllers/todo.controller.js";

const router = Router()

router.route("/create").post(createTodo)
// http://localhost:3000/api/v1/todo/create

router.route("/display").get(displayAllTodo)
// http://localhost:3000/api/v1/todo/display

router.route("/deletebyname").delete(deleteATodo)
// http://localhost:3000/api/v1/todo/deletebyname

router.route("/update").patch(updateTodo)
// http://localhost:3000/api/v1/todo/update


export default router;
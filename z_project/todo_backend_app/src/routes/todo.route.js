import { Router } from "express";
import { createTodo, displayAllTodo } from "../controllers/todo.controller.js";

const router = Router()

router.route("/create").post(createTodo)
// http://localhost:3000/api/v1/todo/create

router.route("/display").get(displayAllTodo)
// http://localhost:3000/api/v1/todo/display


export default router;
import Todo from "../models/todo.model.js";
import HandleError from "../utils/HandleError.js";
import HandleResponse from "../utils/HandleResponse.js";

// 

const createTodo = async (req, res) => {
    const { todoText } = req?.body
    // Data has been received or not.

    if (!todoText) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Please provide a todo text!")
        )
    }

    // ""
    if (todoText?.trim() === "" ) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Todo text shouldn't be empty!")
        )
    }

    const todo = await Todo.create(
        {
            todoText: todoText?.trim()
        })

    /*
    const todo = {
        _id: ObjectId("jgsjhg76w387684y89"),
        "todoText": "JavaScript Back-End"
    }
    */

    const todoPresent = await Todo.findById(todo._id)

    if (!todoPresent) {
        return res
        .status(500)
        .json(
            new HandleError(500, "Something went wrong while creating the Todo :(")
        )
    }

    return res
    .status(200)
    .json(
        new HandleResponse(200, todoPresent, "Todo created successfully! :)")
    )
}

const displayAllTodo = async (req, res) => {
    const data = await Todo.find()

    return res
    .status(200)
    .json(
        new HandleResponse(200, data, "Todo fetched successfully! :)")
    )
}

const deleteATodo = async (req, res) => {
    /*
    {
       "todos": [
           "Frontend",
           "Backend",
           "MERN Stack",
           "Django"
       ]
    }
    */
   
    // user se todo name pucho
    // database call karke check karo ki todo present hai ya nehi
    // present hota hai to delete kardo
    // nehi present hota hai to error throw karo

    const {todoText} = req?.body

    if (todoText == undefined || null) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Todo Text shouldn't be empty! :(")
        )
    }

    if (todoText?.trim() == "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Todo Text shouldn't be empty! :(")
        )
    }

    const todo = await Todo.findOne({ todoText: todoText?.trim() })

    if (!todo) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Todo not found! :(")
        )
    }

    await Todo.deleteOne({ _id: todo?._id })

    return res
    .status(200)
    .json(
        new HandleResponse(200, {}, "Todo deleted successfully! :)")
    )
}

const updateTodo = async (req, res) => {
    const { todoText, newTodoText } = req?.body

    if (todoText == undefined || null) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Todo Text shouldn't be empty! :(")
        )
    }

    if (todoText?.trim() == "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "Todo Text shouldn't be empty! :(")
        )
    }

    if (newTodoText?.trim() == "") {
        return res
        .status(400)
        .json(
            new HandleError(400, "New Todo Text shouldn't be empty! :(")
        )
    }

    const todo = await Todo.findOne({ todoText: todoText?.trim() })

    if (!todo) {
        return res
        .status(400)
        .json(
            new HandleError(400, "Todo not found! :(")
        )
    }

    todo.todoText = newTodoText
    await todo.save()

    return res
    .status(200)
    .json(
        new HandleResponse(200, {}, "Todo Modified Successfully! :)")
    )
}

export {
    createTodo,
    displayAllTodo,
    deleteATodo,
    updateTodo
}
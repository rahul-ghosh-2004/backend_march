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

    const todo = await Todo.create({
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

const deleteATodo = () => {
    // JavaScript
    // Back-End Class
    // React Native
    // Todo.findOneAndDelete({
    //     "todoText": "JavaScript"
    // })
}

const updateTodo = () => {

}

export {
    createTodo,
    displayAllTodo,
    deleteATodo,
    updateTodo
}
import mongoose, { Schema } from "mongoose"

const todoSchema = new Schema({
    todoText: {
        type: String,
        required: true
    },
    completedStatus: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Todo = mongoose.model("Todo", todoSchema)

export default Todo
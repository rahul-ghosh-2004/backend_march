import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    mobileNo: {
        type: Number,
        required: true
    },
    aadhaar: {
        type: Number,
        required: true
    },
    pan: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model("UserModel", userSchema)

export default UserModel
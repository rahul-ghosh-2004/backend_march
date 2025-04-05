import mongoose, { Schema } from "mongoose";

const mobileSchema = new Schema({
    mobileName: {
        type: String,
        required: true
    },
    mobileImage: {
        type: String,
        required: true
    },
    mobileColor: {
        type: String,
        required: true
    },
    ram: {
        type: Number,
        required: true
    },
    storage: {
        type: Number,
        required: true
    },
    battery: {
        type: Number,
        required: true
    }
})

const MobileModel = mongoose.model("MobileModel", mobileSchema)

export default MobileModel
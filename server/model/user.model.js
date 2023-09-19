import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    path:{
        type:String
    },
    name: {type: String,
        default:'default.jpg'
    },
},{timestamps:true})

export default model('users', userSchema)
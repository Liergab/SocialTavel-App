import mongoose, { Schema, model } from 'mongoose'

const postSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    username:{
        type:String,
    },
    description:{
        type:String
    },
    name:{
        type:String,
        default:"bry.jpg"
    },
    path:{
        type:String,
        default:"public\image\mj.jpg"
    }  
},{timestamps:true})

export default model('posts', postSchema)
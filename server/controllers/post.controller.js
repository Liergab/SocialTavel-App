import asyncHandler from 'express-async-handler'
import postModel from '../model/post.model.js'

// @desc get method  
// routes: v3/api/allpost
// access: public

export const getAllPost = asyncHandler(async(req,res) => {
 res.json({message:"from postroutes"})
})

// @desc get method  
// routes: v3/api/userpost
// access: private

export const userPost = asyncHandler(async(req,res) => {
    const getUserPost = await postModel.find().exec()
    res.status(200).json(getUserPost)
})

// @desc post method  
// routes: v3/api/otherpost/:id
// access: public
export const othersPost = asyncHandler(async(req,res) => {
    
})

// @desc post method  
// routes: v3/api/userpost
// access: public
export const createPost = asyncHandler(async(req,res) => {

    const {description} = req.body;

    const newPost = await postModel.create({
        description,
        userId:req.user._id,
        username:req.user.username,
        path:req.file?.path,
        name:req.file?.originalname
    })

    if(!newPost){
        res.status(400)
        throw new Error('Something error')
    }

    res.status(201).json(newPost)
    
})



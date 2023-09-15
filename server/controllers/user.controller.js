import User from '../model/user.model.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
import generateToken from '../middleware/generateToken.js'


// @desc: get method
// routes: v3/api/user
// access: protected
export const getUser = asyncHandler( async(req,res) => {
  res.json(req.user)
})

// @desc: post method
// routes: v3/api/register
// access: public
export const register = asyncHandler(async(req,res) => {
    const {username, email, password} = req.body

    if(!username || !email || !password){
        res.status(400);
        throw new Error('All Fieds is Required to fill up!')
    }
    const salt = await bcrypt.genSalt(10)
    const HashPassword = await bcrypt.hash(password, salt)

    const newUser = await User.create({
        username,
         email, 
         password:HashPassword, 
         path:req.file?.path , 
         name: req.file?.originalname})

    res.status(201).json(newUser)

})


// @desc post method  
// routes: v3/api/login
// access: public

export const login = asyncHandler(async(req,res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user.id,
            email: user.email,
            username: user.username, 
            generateToken: generateToken(user.id)
        })
    }else{
        res.status(500)
        throw new Error('Invalid Credentials')
    }
})

// @desc put method
// routes: v3/api/user/:id
// access: protected
export const updateUser = (req,res) => {
    
}



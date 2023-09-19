import express from 'express';
import multer from 'multer';
import * as controller from '../controllers/post.controller.js'
import protect from '../middleware/protected.js';
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'public/image')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
  });
  
         const upload = multer({
    storage:storage
  });


// fetch all post & public access
router.get('/allpost', controller.getAllPost)

// fetch post of user & private access
router.get('/userpost', controller.userPost)

//fetch post of other
router.get('/otherpost/:id')
// create post
router.post('/userpost',upload.single('file'),protect, controller.createPost)

export default router
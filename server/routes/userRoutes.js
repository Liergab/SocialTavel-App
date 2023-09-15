import express from 'express';
import * as controller from '../controllers/user.controller.js'
import multer from 'multer';
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

router.get('/user',protect,controller.getUser)
router.post('/login',controller.login)
router.post('/register', upload.single('file'),controller.register)
router.put('/user/:id',controller.updateUser)

export default router
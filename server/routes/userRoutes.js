import express from 'express';
import * as controller from '../controllers/user.controller.js'
const router = express.Router();

router.get('/user',controller.getUser)
router.post('/login',controller.login)
router.post('/register',controller.register)
router.put('/user/:id',controller.updateUser)

export default router
import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import DB from './config/Database.js';
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'
import { notFoundPage, errorHandler } from './middleware/errorHandler.js';
const app = express();
const PORT = 5001 || process.env.PORT
app.use(express.json());
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use('/v3/api', userRoutes)
app.use('/v3/api', postRoutes)
app.use(notFoundPage)
app.use(errorHandler)
DB();
app.listen(PORT, () => {
    console.log(`Listening on Port: http://localhost:${PORT}`)
})

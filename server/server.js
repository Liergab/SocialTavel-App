import express from 'express';
import 'dotenv/config'
import DB from './config/Database.js';
import userRoutes from './routes/userRoutes.js'
import { notFoundPage, errorHandler } from './middleware/errorHandler.js';
const app = express();
const PORT = 5001 || process.env.PORT
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/v3/api', userRoutes)
app.use(notFoundPage)
app.use(errorHandler)
DB();
app.listen(PORT, () => {
    console.log(`Listening on Port: http://localhost:${PORT}`)
})

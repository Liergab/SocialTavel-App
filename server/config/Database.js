import mongoose from "mongoose";

const DB = async() => {
    try {
        const db_connection = await mongoose.connect(process.env.MONGODB_URL_STRING)
        console.log(`Connected: ${db_connection.connection.host}, ${db_connection.connection.name}`)
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

export default DB
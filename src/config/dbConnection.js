import mongoose from "mongoose";


async function dbConnection() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;    
}

export default dbConnection;

/* 
mongodb+srv://jcmacahua:PAjvMcjvDzcgkssx@cluster0.pzzeiys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

 */
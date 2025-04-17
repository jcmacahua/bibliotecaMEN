import mongoose from "mongoose";


async function dbConnection() {
    mongoose.connect('mongodb+srv://jcmacahua:1DGAV5t4XNkHdqpR@cluster0.tjer1e7.mongodb.net/libreria?retryWrites=true&w=majority&appName=Cluster0');    
    return mongoose.connection;    
}

export default dbConnection;

/* 
mongodb+srv://jcmacahua:PAjvMcjvDzcgkssx@cluster0.pzzeiys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

 */
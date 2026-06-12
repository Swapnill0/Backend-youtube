//require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import dns from "node:dns"; // Or const dns = require("node:dns");
dns.setServers(["0.0.0.0", "8.8.8.8","1.1.1.1"]);
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
})




connectDB()
.then(() => {
    app.listen(process.env.PORT || 800, () => {
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("mongo db failed",err);
})





















/*
import express from "express";
const app = express()
( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("error",error);
            throw error
        })
    
        app.listen(process.env.PORT,()=>{
            console.log(`App is listning on port ${process.env.PORT}`);
        })

    }
    catch(error){
        console.error("ERROR",error)
        throw err
    }
})()*/
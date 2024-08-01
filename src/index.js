//require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});





connectDB();


















/*

// ye first approach hai jisme sab saath hi hai
// we will use second to just make the files different

import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERRR: ", error);
            throw error
        }) // event to listen error through express

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.log("ERROR: ", error);
        throw err
    }
})()

*/
import mongoose from "mongoose";
import { DB_URL } from "../config/config.js";

mongoose
.connect(DB_URL)
.then(()=>{
    console.log("DB CONNECTED")
})
.catch((err)=>{
    
    console.log("DB CONNECTED")
})

export default mongoose;
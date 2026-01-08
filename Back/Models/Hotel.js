import mongoose from "../db/conn.js";
let HotelSchema = mongoose.Schema({
    title : String,
    address : String,
    price : String
})
const Hotels = mongoose.model("hotel", HotelSchema)

export default Hotels;
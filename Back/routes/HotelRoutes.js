import express, { Router } from 'express';
import { GetAllHotel,GetByIdHotel,UpdateHotel,DeleteHotel,SaveHotel } from '../Controllers/HotelsController.js';

let routes = express.Router();

routes.get("/",GetAllHotel)
routes.get("/:id",GetByIdHotel)
routes.post("/",SaveHotel)
routes.put("/:id",UpdateHotel)
routes.delete("/:id",DeleteHotel)

export default routes
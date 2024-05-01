import { Router } from "express";
import { addOrder, cencledOrder, getAllOrder } from "../controller/order.controller.js";
import { addOrderValidation } from "../validation/orderValidation.js";
import {validation} from "../middleware/validation.middleware.js"
export const orderRouter = Router()

orderRouter
    .get("/order/get" , getAllOrder)
    .post("/order/post/:product_id",validation(addOrderValidation), addOrder) 
    .get("/order/cencle/:id", cencledOrder) 
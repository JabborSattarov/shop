import { Router } from "express";
import { addProduct, getProducts } from "../controller/products.controller.js";
import { validation } from "../middleware/validation.middleware.js";
import { addProductValidation } from "../validation/productValidation.js";

export const productsRouter = Router()

productsRouter 
    .get('/products/get', getProducts)
    .post('/products/add/:sub_id', validation(addProductValidation), addProduct)
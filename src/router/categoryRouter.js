import { Router } from "express";
import { addNewCategory, deleteCategory, getCategoryes, getOneCategory, updateCategory } from "../controller/category.controller.js";
import { addCategoryValidation } from "../validation/categoryValidation.js";
import { validation } from "../middleware/validation.middleware.js";

export const categoryRouter = Router();

categoryRouter
    .get("/category/get", getCategoryes)
    .get("/category/get/:category_id", getOneCategory)
    .post("/category/add", validation(addCategoryValidation), addNewCategory)
    .delete("/category/delete/:id", deleteCategory)
    .patch("/category/update/:id",validation(addCategoryValidation)  ,updateCategory);

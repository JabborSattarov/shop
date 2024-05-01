import { Router } from "express";
import {validation} from "../middleware/validation.middleware.js"
import {
    addSubCategory,
    deleteSubCategory,
    getSubCategory,
    updateSubCategory,
} from "../controller/subCategroy.controller.js";
import { addSubcategoryValidation } from "../validation/subcategoryValidaion.js";

export const subCategoryRouter = Router();

subCategoryRouter
    .get("/subcategory/get", getSubCategory)
    .post("/subcategory/add/:category_id",validation(addSubcategoryValidation),  addSubCategory)
    .patch("/subcategory/update/:sub_id", updateSubCategory)
    .delete("/subcategory/delete/:sub_id", deleteSubCategory);

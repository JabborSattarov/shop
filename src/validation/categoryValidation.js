
import joi from "joi";

export const addCategoryValidation = joi.object({
    category_name: joi.string().required().min(2).max(100)
}).required();
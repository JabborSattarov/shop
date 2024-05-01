import joi from "joi"

export const addSubcategoryValidation = joi.object({
    sub_name: joi.string().required().min(2).max(100)
}).required()
import joi from "joi";

export const addProductValidation = joi.object({
    product_name: joi.string().required().min(2),
    product_price: joi.string().required(),
    product_color: joi.array().required(),
    total_count:joi.number(),
    product_description: joi.object().required()
}).required()
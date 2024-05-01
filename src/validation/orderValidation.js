import joi from "joi" ;

export const addOrderValidation = joi.object({
    user_name:joi.string().required().min(2),
    user_phone: joi.string().required(),
    user_address: joi.string().required(),
    product_count: joi.number().required()
}).required()
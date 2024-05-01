import { ErrorHandler } from "../exaptions/exaption.js";
import porductsModel from "../model/porducts.model.js";
import subCategoryModel from "../model/subCategory.model.js";

export const getProducts = async (req, res, next) => {
    try {
        const allProducts = await porductsModel.find();
        allProducts
            ? res.json(allProducts)
            : new ErrorHandler("Nothing Found", 404);
    } catch (error) {
        next(new ErrorHandler(error, 503));
    }
};

export const addProduct = async (req, res, next) => {
    try {
        const {
            product_name,
            product_price,
            product_color,
            product_description,
        } = req.body;

        const {sub_id} = req.params

        const newProduct = await porductsModel({
            product_name,
            product_price,
            product_color,
            product_description
        })
        newProduct.save()

        if (sub_id) {
            const subcateogry = await subCategoryModel.findById({_id: sub_id})
            
            if(subcateogry){
                subcateogry.products.push(newProduct?._id)
                subcateogry.save()
            }
        }

        res.json(newProduct)

    } catch (error) {
        next(new ErrorHandler(error.message, 503));
    }
};

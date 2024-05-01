import categoryModel from "../model/category.model.js";
import { ErrorHandler } from "../exaptions/exaption.js";

export const getCategoryes = async (req, res, next) => {
    try {
        const allCategory = await categoryModel.find().populate("sub_category");

        if (!allCategory.length) {
            console.log(allCategory)
            next(new ErrorHandler("category not found " , 404))
        }else {
            console.log(allCategory);
            res.json(allCategory)
        }
        
    } catch (error) {
         next( new ErrorHandler(error.message, 503));
    }
};

export const getOneCategory = async (req, res, next) => {
    try {
        const { category_id } = req.params;
        if (category_id) {
            const foundedCategory = await categoryModel.findOne({
                _id: category_id,
            });
            foundedCategory
                ? res.json(foundedCategory)
                : new ErrorHandler("category Not Found ", 404);
        }
    } catch (error) {
        next(new ErrorHandler(error.message, 500));
    }
};

export const addNewCategory = async (req, res, next) => {
    try {
        const { category_name } = req.body;

        if (!category_name) {
            return next(new ErrorHandler("Enter name of Category !", 404));
        } else {
            const newCategory = new categoryModel({ category_name });
            res.json(await newCategory.save());
        }
    } catch (error) {
        next(new ErrorHandler(error, 503));
    }
};

export const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (id) {
            return res.json(await categoryModel.findByIdAndDelete(id));
        } else {
            next(new ErrorHandler("no id", 402));
        }
    } catch (error) {
        next(new ErrorHandler(error, 503));
    }
};

export const updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { category_name } = req.body;

        if (id && category_name) {
            const foundedData = await categoryModel.findById(id);

            foundedData.category_name = category_name;

            const updated = new categoryModel(foundedData);

            return res.json(await updated.save());
        }
    } catch (error) {
        next(new ErrorHandler(error, 503));
    }
};

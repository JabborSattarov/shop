import subCategoryModel from "../model/subCategory.model.js";
import categoryModel from "../model/category.model.js";
import { ErrorHandler } from "../exaptions/exaption.js";

export const getSubCategory = async (req, res, next) => {
    try {
        const subCategory = await subCategoryModel.find().populate("products");
        if (!subCategory) {
            new ErrorHandler("not found", 404);
        }
        res.json(subCategory);
    } catch (error) {
        new ErrorHandler(error, 503);
    }
};

export const addSubCategory = async (req, res, next) => {
    try {
        const { sub_name } = req.body;
        const { category_id } = req.params;

        const newSubCategory = new subCategoryModel({ sub_name });

        const category = await categoryModel.findById({ _id: category_id });

        const saved = await newSubCategory.save();
        if (saved) {
            if (newSubCategory._id) {
                category?.sub_category.push(saved?._id);
                await category.save();
            }
        }

        res.json(newSubCategory);
    } catch (error) {
        console.log(error);
    }
};

export const updateSubCategory = async (req, res, next) => {
    try {
        const { sub_name } = req.body;
        const { sub_id } = req.params;

        if (sub_id && sub_name.length > 0) {
            const foundedSub = await subCategoryModel.updateOne(
                { _id: sub_id },
                { sub_name }
            );
            if (foundedSub) {
                res.json({
                    mes: "okay"
                });
            }
        } else {
            new ErrorHandler("need enter sub name", 403);
        }
    } catch (error) {
        console.log(error)
        next(new ErrorHandler(error, 504));
    }
};



export const deleteSubCategory = async( req, res , next) =>{

    const {sub_id} = req.params

    const deleted = await subCategoryModel.deleteOne({_id: sub_id})

    if (deleted) {
        res.json(deleted)
    }
}
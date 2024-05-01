import { ErrorHandler } from "../exaptions/exaption.js";
import orderModel from "../model/order.model.js";
import productsModel from "../model/porducts.model.js";
export const getAllOrder = async (req, res, next) => {
    try {
        const allOrder = await orderModel
            .find()
            .populate({
                path: "product_id",
                select: "product_name , product_price",
            });
        res.json(allOrder);
    } catch (error) {
        next(error);
    }
};

export const addOrder = async (req, res, next) => {
    try {
        const { user_name, user_phone, user_address, product_count } = req.body;
        const { product_id } = req.params;

        if (product_id) {
            const product = await productsModel.findById({ _id: product_id });
            if (product) {
                const newOrder = {
                    user_name,
                    user_phone,
                    user_address,
                    product_id,
                    product_count,
                };
                const order = new orderModel(newOrder);
                res.json(await order.save());
            } else {
                new ErrorHandler("Product not  found", 404);
            }
        } else {
            new ErrorHandler("Product Id required", 403);
        }
    } catch (error) {
        next(error);
    }
};

export const cencledOrder = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (id) {
            const foundedOrder = await orderModel.findById({ _id: id });
            if (foundedOrder) {
                // await foundedOrder.save()
                foundedOrder.active_order = !foundedOrder.active_order;
                await foundedOrder.save();
                res.json({ data: "deleted" });
            } else {
                new errorHandler("order NOT Found")
            }
        } else {
            new ErrorHandler("id required", 400);
        }
    } catch (error) {
        next(error);
    }
};

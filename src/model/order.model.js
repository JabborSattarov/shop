
import { Types, model, Schema } from "mongoose";

const orderSchema = Schema({
    order_id: {
        type: Types.ObjectId,
    },
    user_name: {
        type: String,
        require: true,
    },
    user_phone: {
        type: String,
        require: true,
    },
    user_address: {
        type: String,
        require: true,
    },
    product_id: [{ type: Types.ObjectId, ref:"Products"},
    ],
    product_count: {
        type: String,
        default: 0,
    },
    active_order: {
        type: Boolean,
        default: true
    },
});

export default model("Order", orderSchema);

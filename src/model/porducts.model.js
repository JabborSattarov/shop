
import {model, Schema, Types} from "mongoose";





const ProductsSchema = new Schema({
    id:{
        type: Types.ObjectId
    },
    product_name: {
        type: String,
        require: true,
        unique: true
    },
    product_price: {
        type: String,
        require: true
    },
    product_colors: {
        type: Array,
        default: ["white", "black", "yellow"],
        require: true
    },
    total_count:{
        type: Number,
        default: 10,
        require: false
    },
    product_description: {
        type: Object,
        require:true,
    }

})

export default model("Products", ProductsSchema)
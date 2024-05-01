
import { Schema, model, Types } from "mongoose";

const subCategorySchema = new Schema({
    id:{
        type:Types.ObjectId
    },
    sub_name: {
        type: String,
        unique: true,
        require:true
    },
    products: [{type: Types.ObjectId , ref: "Products"}]
})


export default  model("subcategory", subCategorySchema)
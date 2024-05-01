
import { Schema, Types, model  } from "mongoose"

const CategrySchema = new Schema({ 
    id: {
        type:Types.UUID,
    },
    category_name: String,
    sub_category : [{type:Types.ObjectId , ref:"subcategory"}]
},)

export default model("Category", CategrySchema)

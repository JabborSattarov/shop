import mongoose from "mongoose"
import Category from "../model/category.model.js"


const mongoURL = "mongodb://127.0.0.1:27017/task"
export default async () => {
    return await mongoose.connect(mongoURL)
}
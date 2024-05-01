import express from "express";
import dotenv from "dotenv";
import cors from "cors"
// import mongoose from "mongoose";
import mongo from "./src/utils/mongo.js"
import { router } from "./src/router/routes.js";
import { ErrorHandlerMiddleware } from "./src/middleware/errorHandler.middleware.js";
dotenv.config();


const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"))
app.use(router)



mongo() 
    .then(()=> console.log("Connected"))
    .catch((err)=> console.log(err))

// mongoose.connect('mongodb://localhost:27017',);
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });



app.get("/", (req, res ,)=> {
    res.send({
        data: "OKAY"
    })
})

app.use(ErrorHandlerMiddleware)
app.listen(PORT, console.log("okay" + " " + PORT));

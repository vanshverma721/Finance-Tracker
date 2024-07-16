import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = process.env.MongoDB_URL || "";

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to Connect to MongoDB:", err));


app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});
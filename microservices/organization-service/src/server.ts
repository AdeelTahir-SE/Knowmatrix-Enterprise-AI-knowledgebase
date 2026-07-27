import express from "express";
import router from "./organization.routes.ts";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app=express();

app.use(cors())
app.use(express.json());
app.use(router);

app.listen(5002,()=>{
    console.log("Organization service is running on port 3000");
})
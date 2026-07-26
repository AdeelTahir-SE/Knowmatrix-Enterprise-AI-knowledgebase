import express from "express";
import router from "./auth.routes.js";
import connectDB from "./db.js";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION ;
const ACCESS_TOKEN_EXPIRATION = process.env.ACCESS_TOKEN_EXPIRATION;
const CSRF_TOKEN_EXPIRATION = process.env.CSRF_TOKEN_EXPIRATION ;

console.log("tokens123",REFRESH_TOKEN_EXPIRATION, ACCESS_TOKEN_EXPIRATION, CSRF_TOKEN_EXPIRATION)
const app = express();

app.use(cors());
app.use(express.json());

connectDB();


app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use("/", router);
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});

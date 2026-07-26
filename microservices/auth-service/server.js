import express from "express";
import router from "./auth.routes.js";
import connectDB from "./db.js";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
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

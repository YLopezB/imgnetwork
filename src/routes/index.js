import { Router } from "express";
import home from "../controllers/home.js";
import image from "../controllers/image.js";

const index = Router();

index.use("/", home);
index.use("/images", image);


export default index;

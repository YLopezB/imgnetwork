import { Router } from "express";
import { Image } from "../models/index.js";

const home = Router();

home.get("/", async (req, res) => {
  const images = await Image.find().sort({ timestamp: -1 }).lean()
  
  res.render("partials/index", { images });
});

export default home;

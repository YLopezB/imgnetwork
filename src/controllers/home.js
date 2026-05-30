import { Router } from "express";
import { Image } from "../models/index.js";

const home = Router();

home.get("/", async (req, res) => {
  const images = await Image.find().lean().sort({ timeStamp: -1 });
  res.render("partials/index", { images });
});

export default home;

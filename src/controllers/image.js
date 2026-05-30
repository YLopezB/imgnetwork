import { Router } from "express";
import { randomName } from "../helpers/libs.js";
import fs from "fs";

const image = Router();

image.get("/:image_id", (req, res) => {});
image.post("/", async (req, res) => {
  const name = randomName();
  const ext = req.file.originalname.split(".").pop().toLocaleLowerCase();
  const imageTempPath = req.file.path;
  const targetPath = `src/public/uploads/${name}.${ext}`;

  if (ext === "png" || ext === "jpg" || ext === "jpeg" || ext === "gif") {
    await fs.promises.rename(imageTempPath, targetPath);
  }
  res.send("ok");
});
image.post("/:image_id/like", (req, res) => {});
image.post("/:image_id/comment", (req, res) => {});
image.delete("/:image_id", (req, res) => {});

export default image;

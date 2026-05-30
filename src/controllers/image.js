import { Router } from "express";
import { randomName } from "../helpers/libs.js";
import fs from "fs";
import { Image } from "../models/index.js";

const image = Router();

image.get("/:image_id", async (req, res) => {
  const imageId = req.params.image_id;
  const image = await Image.findById(imageId).lean();
  if (image) {
    res.render("partials/images", { image });
  } else {
    res.status(404).send("Image not found");
  }
});

image.post("/", (req, res) => {
  const saveImage = async () => {
    const name = randomName();
    const images = await Image.find({ filename: name });
    console.log(images);
    if (images.length > 0) {
      return saveImage();
    } else {
      const imgTempPath = req.file.path;
      console.log(imgTempPath);
      const ext = req.file.originalname.split(".").pop();
      const imgName = `${name}.${ext}`;
      const targetPath = `./src/public/uploads/${imgName}`;

      if (ext === "png" || ext === "jpg" || ext === "jpeg" || ext === "gif") {
        await fs.promises.rename(imgTempPath, targetPath);
        const newImg = new Image({
          title: req.body.title,
          filename: imgName,
          description: req.body.description,
        });
        const savedImage = await newImg.save();
        res.send("ok");
      } else {
        await fs.promises.unlink(imgTempPath);
        res
          .status(400)
          .json({ success: false, message: "Archivo en formato no permitido" });
      }
    }
  };
  return saveImage();
});
image.post("/:image_id/like", (req, res) => {});
image.post("/:image_id/comment", (req, res) => {});
image.delete("/:image_id", (req, res) => {});

export default image;

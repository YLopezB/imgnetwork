import { Router } from "express";

const image = Router();

image.get("/:image_id", (req, res) => {});
image.post("/", (req, res) => {});
image.post("/:image_id/like", (req, res) => {});
image.post("/:image_id/comment", (req, res) => {});
image.delete("/:image_id", (req, res) => {});

export default image;

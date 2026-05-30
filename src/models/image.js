import mongoose from "mongoose";

const { Schema } = mongoose;

const imageSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  filename: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now },
});

export const Image = mongoose.model("Image", imageSchema);

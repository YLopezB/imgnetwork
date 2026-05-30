import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  image_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
    required: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  gravatar: { type: String, required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Comment = mongoose.model("Comment", commentSchema);

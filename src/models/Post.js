import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Kiểm tra xem model đã tồn tại chưa
const Post = mongoose.models.Post
  ? mongoose.model("Post")
  : mongoose.model("Post", postSchema);

export default Post;

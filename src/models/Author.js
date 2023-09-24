import mongoose from "mongoose";

const authorSchema = mongoose.Schema(
  {
    id: String,
    name: { type: String, required: true },
  },
  { versionKey: false }
);

const authors = mongoose.model("authors", authorSchema);

export default authors;

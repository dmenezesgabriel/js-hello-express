import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  id: String,
  title: { type: String, required: true },
  author: { type: String, required: true },
});

const books = mongoose.model("books", BookSchema);

export default books;

import express from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router
  .get("/books", BookController.getAll)
  .post("/books", BookController.create)
  .put("/books/:id", BookController.update);

export default router;

import express from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router.get("/books", BookController.getAll);
router.post("/books", BookController.create);
router.put("/books/:id", BookController.update);

export default router;

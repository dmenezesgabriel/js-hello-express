import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

routes(app);

// app.get("/books/:id", (req, res) => {
//   const index = searchBooksById(req.params.id);
//   res.status(200).json(books[index]);
// });

// app.post("/books", (req, res) => {
//   books.push(req.body);
//   res.sendStatus(201).send("Book added successfully");
// });

// app.put("/books/:id", (req, res) => {
//   const { id } = req.params;
//   const index = searchBooksById(id);
//   books[index].title = req.body.title;
//   books[index].author = req.body.author;
//   res.json(books);
// });

// app.delete("/books/:id", (req, res) => {
//   const { id } = req.params;
//   const index = searchBooksById(id);
//   books.splice(index, 1);
//   res.sendStatus(204).send("Book deleted successfully");
// });

// function searchBooksById(id) {
//   return books.findIndex((book) => book.id == id);
// }

export default app;

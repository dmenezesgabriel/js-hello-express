import express from "express";
import db from "./config/dbConnect.js";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.use(express.json());

const books = [
  {
    id: 1,
    title: "Harry Potter",
    author: "J.K. Rowling",
    editor: "Bloomsbury",
    year: 1997,
    pages: 223,
    language: "English",
  },
  {
    id: 2,
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    editor: "Allen & Unwin",
    year: 1954,
    pages: 423,
    language: "English",
  },
  {
    id: 3,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    editor: "Allen & Unwin",
    year: 1937,
    pages: 310,
    language: "English",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

app.get("/books/:id", (req, res) => {
  const index = searchBooksById(req.params.id);
  res.status(200).json(books[index]);
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.sendStatus(201).send("Book added successfully");
});

app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const index = searchBooksById(id);
  books[index].title = req.body.title;
  books[index].author = req.body.author;
  res.json(books);
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const index = searchBooksById(id);
  books.splice(index, 1);
  res.sendStatus(204).send("Book deleted successfully");
});

function searchBooksById(id) {
  return books.findIndex((book) => book.id == id);
}

export default app;

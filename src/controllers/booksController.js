import books from "../models/Book.js";

class BookController {
  static getAll = async (req, res) => {
    try {
      const result = await books.find().populate("author").exec();
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  static getOne = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await books.findById(id).populate("author").exec();
      res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  };

  static getByQuery = async (req, res) => {
    try {
      const result = await books.find(req.query).populate("author").exec();
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  static create = async (req, res) => {
    const book = new books(req.body);
    try {
      await book.save();
      res
        .status(201)
        .json({ message: "Book created successfully", book: book });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  static update = async (req, res) => {
    const { id } = req.params;
    try {
      const book = await books.findByIdAndUpdate(id, req.body);
      res
        .status(200)
        .json({ message: "Book updated successfully", book: book });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  static delete = async (req, res) => {
    const { id } = req.params;
    try {
      const book = await books.findByIdAndDelete(id);
      res
        .status(200)
        .json({ message: "Book deleted successfully", book: book });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };
}

export default BookController;

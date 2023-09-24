import books from "../models/Book.js";

class BookController {
  static getAll = async (req, res) => {
    try {
      const result = await books.find({});
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  static create = async (req, res) => {
    const book = new books(req.body);
    try {
      book.save();
      res.status(201).json(book);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  static update = async (req, res) => {
    const { id } = req.params;
    try {
      books.findOneAndUpdate({ _id: id }, req.body);
      res.status(200).json({ message: "Book updated successfully" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };
}

export default BookController;

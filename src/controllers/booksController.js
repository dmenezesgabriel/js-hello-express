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
}

export default BookController;

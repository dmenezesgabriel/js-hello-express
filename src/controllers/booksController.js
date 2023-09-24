import books from "../models/Book.js";

class BookController {
  static getAll = async (req, res) => {
    try {
      const result = await books.find().populate("author").exec();
      const booksWithLinks = result.map((book) => {
        const bookWithLink = book.toJSON();
        bookWithLink.links = [
          {
            href: `/books/${book._id}`,
            rel: "self",
            method: "GET",
          },
          {
            href: `/books/${book._id}`,
            rel: "update",
            method: "PUT",
          },
          {
            href: `/books/${book._id}`,
            rel: "delete",
            method: "DELETE",
          },
        ];
        return bookWithLink;
      });
      res.status(200).json(booksWithLinks);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  static getOne = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await books.findById(id).populate("author").exec();
      const bookWithLink = result.toJSON();
      bookWithLink.links = [
        {
          href: `/books/${bookWithLink._id}`,
          rel: "self",
          method: "GET",
        },
        {
          href: `/books/${bookWithLink._id}`,
          rel: "update",
          method: "PUT",
        },
        {
          href: `/books/${bookWithLink._id}`,
          rel: "delete",
          method: "DELETE",
        },
      ];
      res.status(200).json(bookWithLink);
    } catch (err) {
      return res.status(400).json({ message: err.message });
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

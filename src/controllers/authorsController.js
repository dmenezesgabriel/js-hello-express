import authors from "../models/Author.js";

class AuthorController {
  static getAll = async (req, res) => {
    try {
      const result = await authors.find({});
      const authorsWithLinks = result.map((author) => {
        const authorWithLink = author.toJSON();
        authorWithLink.links = [
          {
            href: `/authors/${author._id}`,
            rel: "self",
            method: "GET",
          },
          {
            href: `/authors/${author._id}`,
            rel: "update",
            method: "PUT",
          },
          {
            href: `/authors/${author._id}`,
            rel: "delete",
            method: "DELETE",
          },
        ];
        return authorWithLink;
      });
      res.status(200).json(authorsWithLinks);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  static getOne = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await authors.findById(id);
      const autorWithLink = result.toJSON();
      autorWithLink.links = [
        {
          href: `/authors/${autorWithLink._id}`,
          rel: "self",
          method: "GET",
        },
        {
          href: `/authors/${autorWithLink._id}`,
          rel: "update",
          method: "PUT",
        },
        {
          href: `/authors/${autorWithLink._id}`,
          rel: "delete",
          method: "DELETE",
        },
      ];
      res.status(200).json(authorWithLink);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  };

  static create = async (req, res) => {
    const author = new authors(req.body);
    try {
      await author.save();
      res
        .status(201)
        .json({ message: "Author created successfully", author: author });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  static update = async (req, res) => {
    const { id } = req.params;
    try {
      const author = await authors.findByIdAndUpdate(id, req.body);
      res
        .status(200)
        .json({ message: "Author updated successfully", author: author });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  static delete = async (req, res) => {
    const { id } = req.params;
    try {
      const author = await authors.findByIdAndDelete(id);
      res
        .status(200)
        .json({ message: "Author deleted successfully", author: author });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };
}

export default AuthorController;

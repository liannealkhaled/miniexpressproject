const Book = require("../../models/Book");
// functions

// get all books by GET
const GetAllBooks = async (req, res) => {
  const books = await Book.find();
  return res.status(200).json(books);
};

// get one book by GET
const GetOneBookbyId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const OneBook = await Book.findById(id);
    return res.status(200).json(OneBook);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// create a book by POST
const CreateBook = async (req, res) => {
  const newBook = await Book.create(req.body);
  return res.status(201).json(newBook);
};

// update a book by PUT
///////
const UpdatedBookbyId = async (req, res) => {
  const { id } = req.params;
  const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  return res.status(200).json(updatedBook);
};

// delete a book by DELETE
const DeleteBookbyId = async (req, res) => {
  // const {username} = req.body;
  const { id } = req.params;
  const deletedBook = await Book.findByIdAndDelete(id);

  return res.status(204).end();
};

module.exports = {
  GetAllBooks,
  CreateBook,
  GetOneBookbyId,
  DeleteBookbyId,
  UpdatedBookbyId,
};

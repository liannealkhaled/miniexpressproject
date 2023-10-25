const express = require("express");
const {
  GetAllBooks,
  CreateBook,
  GetOneBookbyId,
  DeleteBookbyId,
  UpdatedBookbyId,
} = require("./controller");
const booksrouter = express.Router();

booksrouter.get("/books", GetAllBooks);

booksrouter.post("/books", CreateBook); // ('/' , function from router )

booksrouter.get("/books/:id", GetOneBookbyId);

booksrouter.delete("/books/:id", DeleteBookbyId);

booksrouter.put("/books/:id", UpdatedBookbyId);

module.exports = booksrouter;

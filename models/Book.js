const { model, Schema } = require("mongoose");

const booksSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  price: Number,
  image: String,
});

module.exports = model("books", booksSchema); // books , booksScheme

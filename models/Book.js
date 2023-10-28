const { model, Schema } = require("mongoose");

const booksSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  price: { type: Number, required: false, default: 5 },
  image: { type: String, required: false, default: "link" },
});

module.exports = model("books", booksSchema); // books , booksScheme

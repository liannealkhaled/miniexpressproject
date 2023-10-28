const { model, Schema } = require("mongoose");

const booksSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: false, default: 5 },
  image: {
    type: String,
    required: false,
    default:
      "https://i.pinimg.com/originals/18/cb/30/18cb30dc852a352f8fb7b28fc8f18319.jpg",
  },
});

module.exports = model("books", booksSchema); // books , booksScheme

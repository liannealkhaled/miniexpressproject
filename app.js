const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const connectDB = require("./database");
const booksrouter = require("./api/Books/routes");

app.use(express.json());
app.use(cors());
app.use("/api", booksrouter);

connectDB();
app.listen(process.env.PORT, () => {
  console.log("The application is running on localhost:8000");
});

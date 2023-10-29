const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const connectDB = require("./database");
const booksrouter = require("./api/Books/routes");

app.use(express.json());
app.use(cors());
app.use("/api", booksrouter);

// //////// image upload ::
// const multer = require("multer");
// //Setting storage engine
// const storageEngine = multer.diskStorage({
//   destination: "./images",
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}--${file.originalname}`);
//   },
// });
// //initializing multer
// const upload = multer({
//   storage: storageEngine,
// });
// app.post("/single", upload.single("image"), (req, res) => {
//   if (req.file) {
//     res.send("Single file uploaded successfully");
//   } else {
//     res.status(400).send("Please upload a valid image");
//   }
// });

/// end of image upload

connectDB();
app.listen(process.env.PORT, () => {
  console.log("The application is running on localhost:8000");
});

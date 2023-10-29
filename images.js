// const multer = require("multer");
// const path = require("path ");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/upload", upload.single("image") , (req,res)=>{ res.send("image uploaded")} )

// /// create images folder

// //// detrmine the location "../ images"
// /// upload. is middleware, upload.single to add one image, it can be multiple imgs , has diff properties

// //// create upload file.js

// <form method= "POST" action="/upload" enctype="multipart/form-data">
// <input type="file"name="image" /> ,
// /// <input type="submit" />
// </form>

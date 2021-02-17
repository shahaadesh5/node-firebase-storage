const express = require("express");
const firebase = require("./firebase");
const multer = require("multer");
const cors = require("cors");
const app = express();

const upload = multer({
  storage: multer.memoryStorage(),
});

app.use(cors());

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).send("Missing file");

  const blob = firebase.bucket.file(req.file.originalname);

  const blobWriter = blob.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  blobWriter.on("error", (err) => {
    console.log(err);
  });

  blobWriter.on("finish", () => {
    return res.status(200).json({
      message: "File Uplaoded!",
      publicUrl,
    });
  });
  blobWriter.end(req.file.buffer);
});

module.exports = app;

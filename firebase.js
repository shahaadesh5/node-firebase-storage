var admin = require("firebase-admin");
require("dotenv").config();
var serviceAccount = require("./firebase-config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.BUCKET_URL,
});

const bucket = admin.storage().bucket();

module.exports = {
  bucket,
};

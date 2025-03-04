import mongoose from "mongoose";

const url = "mongodb+srv://adityatripathi1001:hBpFKXasBOEl7iMT@cluster0.7aq46.mongodb.net/";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function () {
  console.log("Connected to MongoDB Atlas");
});
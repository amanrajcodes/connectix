const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose
    .connect("mongodb+srv://amanraj12:amanraj1234@cluster0.ph1joqf.mongodb.net/")
    .then(() => console.log(`connection to database established...`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true });
    console.log("Connect DB successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

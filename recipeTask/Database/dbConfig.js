require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Use the environment variable for the MongoDB URI
    const dbURI = process.env.MONGODB_URI;
    await mongoose.connect(dbURI);
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed", error);
  }
};

module.exports = connectDB;

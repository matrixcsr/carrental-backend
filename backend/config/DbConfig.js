const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDb = async () => {
  try {
    await mongoose.connect(
      process.env.DATABASE_CONN,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("DB connected");
  } catch (error) {
    console.log("unable to connect" + error.message);
  }
};
module.exports = connectDb;

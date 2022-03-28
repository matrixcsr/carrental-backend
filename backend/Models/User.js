const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = Schema({
  id: {
    type: Number,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  phone: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Users", userSchema);

const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb = require("./config/DbConfig");
const userRouter= require("./Routes/UserRoutes");
const cors = require("cors");

connectDb();
app.use(cors())
app.use(express.json());
app.use("/api/user", userRouter);

const PORT = process.env.PORT | 9999;
app.listen(PORT, () => {
  console.log("listening on "+PORT);
});
const express = require("express");
let Users = require("../Models/User");
require("dotenv").config();
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.get("/getUser", async (req, res) => {
  try {
    const User = await Users.find();
    res.send(User);
  } catch (err) {
    return res.status(500).send("Server error");
  }
});

router.get("/getUser/:id", async (req, res) => {
  try {
    const User = await Users.find({ id: req.params.id });
    res.send(User);
  } catch (err) {
    return res.status(500).send("Server error");
  }
});

router.post(
  "/addUser",
  [
    check("name", "Name is missing").not().isEmpty(),
    check("email", "email is missing").not().isEmpty(),
    check("password", "password is invalid").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    const newUser = await Users.create({
      id: req.body.id,
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      role: req.body.role,
    });
    res.send(newUser);
  }
);

router.put(
  "/editUser",
  [
    check("name", "Name is missing").not().isEmpty(),
    check("email", "email is missing").not().isEmpty(),
    check("phone", "Phone is missing").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    try {
      const userBuffer = await Users.findOne({id: req.body.id}).exec();
      userBuffer.name = req.body.name;
      userBuffer.phone = req.body.phone;
      userBuffer.email = req.body.email;
      await userBuffer.save();
      res.send(userBuffer);
    } catch (err) {
      return res.status(404).send("Not found");
    }
    
  }
);

module.exports = router;

const AsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userData = require("../models/goalModels");

const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Something is missing");
  }

  const userExists = await userData.findOne({ email });

  //checing if user exists
  if (userExists) {
    res.status(404);
    throw new Error(
      "Oops! Someone has already created an account with this details"
    );
  }

  //hash passwords
  const salt = await bcrypt.genSalt(10);

  const hashedPasswords = await bcrypt.hash(password, salt);

  const user = await userData.create({
    name,
    email,
    password: hashedPasswords,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("User not created");
  }

  res.status(200).json({ message: "regitered" });
});

const loginUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Something is missing");
  }

  const users = await userData.findOne({ email });

  if (users) {
    const isMatch = bcrypt.compare(password, users.password);

    const token = await users.generateAuthToken();
    console.log(token);

    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 86400000),
      origin: 'http://localhost:3000'
    });

    if (!isMatch) {
      res.json({
        error: "Invalid Credentials",
      });
    } else {
      res.status(200).json({
        message: "Login Sucess",
      });
    }
  }
});

const getUser = AsyncHandler(async (req, res) => {
  const users = await userData.find();

  res.status(200).json(users);
});

const deleteUser = AsyncHandler(async (req, res) => {
  const users = await userData.findByIdAndDelete(req.params.id);

  if (!users) {
    res.status(400);
    throw new Error("User Not found");
  }

  await users.remove();

  res.status(200).json({
    message: "....Deleted",
    id: users.id,
    name: users.name,
    email: users.email,
    password: users.password,
  });
});
module.exports = {
  registerUser,
  getUser,
  loginUser,
  deleteUser,
};

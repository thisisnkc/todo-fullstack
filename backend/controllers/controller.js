const AsyncHandler = require("express-async-handler");
const userData = require("../models/goalModels");

const getGoals = AsyncHandler(async (req, res) => {
  const goals = await userData.find();

  res.status(200).json(goals);
});
const postGoals = AsyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add something atleast");
  }

  const goal = await userData.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  res.status(200).json(goal);
});
const putGoals = AsyncHandler(async (req, res) => {
  const goal = await userData.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("oops something wrong");
  }

  const updated = await userData.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updated);
});

const deleteGoals = AsyncHandler(async (req, res) => {
  const goal = await userData.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("oops something wrong");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});


module.exports = {
  getGoals,
  postGoals,
  deleteGoals,
  putGoals,
};

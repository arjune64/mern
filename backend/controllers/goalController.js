const asyncHandler = require("express-async-handler");

// @desc get goals
// @Route GET /api/goals
// @Access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});

// @desc create goals
// @Route POST /api/goals
// @Access private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Pleae add a text field");
  }
  res.status(200).json({ message: "Set Goals" });
});

// @desc update goals
// @Route PUT /api/goals
// @Access private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc delete goals
// @Route DELETE /api/goals
// @Access private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };

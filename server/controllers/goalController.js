const Goal = require("../models/Goal");

// Add Goal
const addGoal = async (req, res) => {
  try {
    const { affiliateId, month, goalAmount } = req.body;

    if (!affiliateId || !month || !goalAmount) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingGoal = await Goal.findOne({ affiliate: affiliateId, month });

    if (existingGoal) {
      return res
        .status(400)
        .json({ error: "Goal already exists for this month" });
    }

    const newGoal = new Goal({
      affiliate: affiliateId,
      month,
      goalAmount,
      progress: 0,
      milestonesReached: [],
      status: "in-progress",
    });

    await newGoal.save();

    return res.status(201).json({
      message: "Goal created successfully",
      goal: newGoal,
    });
  } catch (error) {
    console.error("Error creating goal:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = { addGoal };

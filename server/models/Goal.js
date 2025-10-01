const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema(
  {
    affiliate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Affiliate",
      required: true,
    },

    month: {
      type: Date,
      required: true,
    },

    goalAmount: {
      type: Number,
      required: true,
      min: 1,
    },

    progress: {
      type: Number,
      default: 0,
      min: 0,
    },

    milestonesReached: {
      type: [Number], // Example: [10, 20, 30, 40]
      default: [],
    },

    status: {
      type: String,
      enum: ["in-progress", "completed", "failed"],
      default: "in-progress",
    },

    // bonusEarned: {
    //   type: Number,
    //   default: 0,
    // },

    // startDate: {
    //   type: Date,
    // },
    // endDate: {
    //   type: Date,
    // },
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model("Goal", GoalSchema);

module.exports = Goal;

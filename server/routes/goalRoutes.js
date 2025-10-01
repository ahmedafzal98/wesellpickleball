const express = require("express");
const { addGoal } = require("../controllers/goalController");

const router = express.Router();

router.post("/", addGoal);
module.exports = router;

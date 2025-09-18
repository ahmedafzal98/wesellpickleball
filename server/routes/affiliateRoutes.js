const express = require("express");
const {
  addAffiliate,
  getAllaffiliate,
} = require("../controllers/affiliateController");

const router = express.Router();

router.post("/", addAffiliate);
router.get("/", getAllaffiliate);

module.exports = router;

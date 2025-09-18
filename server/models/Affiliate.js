const mongoose = require("mongoose");

const AffiliateSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("Affiliate", AffiliateSchema);

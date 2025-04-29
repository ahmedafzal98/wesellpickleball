const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); // to load .env variables

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas successfully.");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Schema
const AffiliateSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
});

// Model
const Affiliate = mongoose.model("Affiliate", AffiliateSchema);

// POST endpoint for form submission
app.post("/api/affiliate", async (req, res) => {
  const { firstName, lastName, email } = req.body;

  // Server-side validation
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  try {
    const newAffiliate = new Affiliate({ firstName, lastName, email });
    await newAffiliate.save();
    res.status(200).json({ message: "Form submitted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

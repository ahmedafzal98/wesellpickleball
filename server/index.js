const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

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
  .then(() => console.log("Connected to MongoDB Atlas successfully."))
  .catch((err) => console.error("MongoDB connection error:", err));

// Mongoose Schema
const AffiliateSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
});

const Affiliate = mongoose.model("Affiliate", AffiliateSchema);

// Email sending function
const sendEmail = async (to) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your Gmail address
      pass: process.env.EMAIL_PASS, // Gmail App password
    },
  });

  const mailOptions = {
    from: '"WeSellPickleball" <no-reply@wesellpickleball.com>',
    to,
    subject: "Get Your WeSellPickleball.com Affiliate On...",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
        <div style="text-align: center;">
          <img src="cid:logo" alt="WeSellPickleball Logo" style="width: 150px; margin-bottom: 20px;" />
        </div>
        <h2 style="color: #333;">Welcome Future WeSellPickleball.com Partner.</h2>
        <p>You're in our court now!</p>
        <p>Thanks for your interest in our WeSellPickleball.com affiliate program. Get ready to dive headfirst into the thrilling world of pickleball partnerships globally.</p>
        <p>We're currently putting the final, oh-so-important touches on our program – think of it as finding the perfect grip for your affiliate paddle but… it's almost game time!</p>
        <p>Soon, you'll be armed and ready to spread the joy and our robust product line via your personalized link.</p>
        <p><strong>Keep your eyes peeled</strong> for an email explaining the official "Let's Get Pickling” signup.</p>
        <p>We're absolutely thrilled to have you aboard the WeSellPickleball.com family.</p>
        <p>Let the fun and the serious pickle-powered profits begin!</p>
        <br />
        <p>Thank you,<br><strong>Your Pickleball Overlords</strong></p>
      </div>
    `,
    attachments: [
      {
        filename: "logo.webp",
        path: path.join(__dirname, "logo.webp"),
        cid: "logo", // same as src="cid:logo"
      },
    ],
  };

  return transporter.sendMail(mailOptions);
};

// POST endpoint
app.post("/api/affiliate", async (req, res) => {
  const { firstName, lastName, email } = req.body;

  // Validation
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

    // Send welcome email
    await sendEmail(email);

    res.status(200).json({ message: "Form submitted and email sent!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error." });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

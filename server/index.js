const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Resend } = require("resend");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173", // Vite local dev server
  "https://wesellpickleball-client.onrender.com", // Your deployed frontend
  "https://wesellpickleball.com", // Live Domain
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

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
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, customerData) => {
  console.log("customerData", customerData);
  // console.log("customerData", customerData);
  // console.log("customerData", customerData);
  try {
    // --- Send Email to Customer ---
    const { data: customerDataRes, error: customerError } =
      await resend.emails.send({
        from: "WeSellPickleball <onboarding@wesellpickleball.com>",
        to,
        subject: "Get Your WeSellPickleball.com Affiliate On...",
        html: `<html>
        <body style="margin:0; padding:0; background-color:black; font-family: Arial, sans-serif;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="black">
            <tr>
              <td align="center">
                <table role="presentation" border="0" cellpadding="20" cellspacing="0" width="600" bgcolor="black" style="color: #ffffff;">
                  <tr>
                    <td align="center">
<img src="https://wesellpickleball.com/assets/pickleball_logo-CCgo5HKu.webp" alt="WeSellPickleball Logo" style="width:250px; display:block; margin-bottom:20px;" />

                    </td>
                  </tr>
                  <tr>
                    <td>
<h1 style="color: #ffffff; text-align: center;">
  Welcome Future 🔮 <a href="https://wesellpickleball.com" style="color: #9AE600; text-decoration: underline;">WeSellPickleball.com</a> Partner.
</h1>
                      <p style="font-size: 16px; color: #ffffff;">You're in our court now! 😀</p>
<p style="font-size: 16px; color: #ffffff;">
  Thanks for your interest in our <strong>
    <a href="https://wesellpickleball.com" style="color: #9AE600; text-decoration: underline;">WeSellPickleball.com</a>
  </strong> affiliate program. Get ready to dive headfirst into the thrilling world 🌎 of pickleball partnerships globally.
</p>
                      <p style="font-size: 16px; color: #ffffff;">
                        We're currently putting the final touches on our program – it’s almost game time! 🕖
                      </p>
                      <p style="font-size: 16px; color: #ffffff;">
                        Soon, you'll be ready to spread the joy and our robust product line via your personalized link.
                      </p>
                      <p style="font-size: 16px; color: #ffffff;">
                        Keep your eyes peeled for an email explaining the official <strong>"Let's Get Pickling”</strong> signup.
                      </p>
                      <p style="font-size: 16px; color: #ffffff;">
                        We're thrilled to have you aboard the <strong>WeSellPickleball.com</strong> family 🧑‍🧑‍🧒‍🧒.
                      </p>
                      <p style="font-size: 16px; color: #ffffff;">
                        Let the fun and the serious pickle-powered profits 🤑 begin!
                      </p>
                      <br />
                      <p style="font-size: 16px; color: #ffffff;">Thank you,</p>
                      <p style="font-size: 16px; color: #ffffff;"><strong>Your Pickleball Overlords</strong></p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>`,
      });

    if (customerError) {
      console.error("❌ Customer email failed:", customerError);
    } else {
      console.log("✅ Customer email sent:", customerDataRes);
    }

    // --- Send Notification to Owner ---
    const { data: ownerDataRes, error: ownerError } = await resend.emails.send({
      from: "WeSellPickleball <onboarding@wesellpickleball.com>",
      to: "info@wesellpickleball.com",
      subject: "New Affiliate Signup Notification",
      html: `
        <h2>New Affiliate Signup</h2>
        <ul>
          <li><strong>First Name:</strong> ${customerData.firstName}</li>
          <li><strong>Last Name:</strong> ${customerData.lastName}</li>
          <li><strong>Email:</strong> ${customerData.email}</li>
        </ul>
      `,
    });

    if (ownerError) {
      console.error("❌ Owner email failed:", ownerError);
    } else {
      console.log("✅ Owner email sent:", ownerDataRes);
    }

    // --- Final Result ---
    if (customerError || ownerError) {
      return { success: false, error: customerError || ownerError };
    }

    return { success: true };
  } catch (err) {
    console.error("🔥 Unexpected error in sendEmail:", err);
    return { success: false, error: err.message };
  }
};

// POST endpoint
app.post("/api/affiliate", async (req, res) => {
  const { firstName, lastName, email } = req.body;

  // --- Basic Validation ---
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  try {
    // --- Save to DB ---
    const newAffiliate = new Affiliate({ firstName, lastName, email });
    await newAffiliate.save();

    // --- Send Emails ---
    const emailResult = await sendEmail(email, { firstName, lastName, email });

    if (!emailResult.success) {
      return res
        .status(500)
        .json({ message: "Error sending emails.", error: emailResult.error });
    }

    // --- Done ---
    res.status(200).json({ message: "Form submitted and emails sent!" });
  } catch (error) {
    console.error("🔥 Error in /api/affiliate:", error);
    res.status(500).json({ message: "Server error.", error });
  }
});

// Start server
const port = process.env.PORT || 5000; // Default to 5000 locally if no environment variable is set
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

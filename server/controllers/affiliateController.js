const Affiliate = require("../models/Affiliate");
const { sendEmail } = require("../services/emailService");

const addAffiliate = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ message: "All fields are required." });
  }
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  try {
    // Save to DB
    const newAffiliate = new Affiliate({ firstName, lastName, email });
    await newAffiliate.save();

    // Send Emails
    const emailResult = await sendEmail(email, { firstName, lastName, email });
    if (!emailResult.success) {
      return res.status(500).json({ message: "Error sending emails." });
    }

    res.status(200).json({
      message:
        "Thank you! 🙏🏻 Your contact info was effectively captured and a confirmation email was sent. 👍🏻",
    });
  } catch (error) {
    console.error("🔥 Error in addAffiliate:", error);
    res.status(500).json({ message: "Server error.", error });
  }
};

const getAllaffiliate = async (req, res) => {
  try {
    const affiliates = await Affiliate.find();
    res.status(200).json(affiliates);
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { addAffiliate, getAllaffiliate };

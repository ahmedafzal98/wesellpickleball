const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const customerWelcomeEmail = require("../templates/customerWelcomeEmail");
const ownerNotificationEmail = require("../templates/ownerNotificationEmail");

const sendEmail = async (to, customerData) => {
  try {
    // Send welcome email to customer
    const { error: customerError } = await resend.emails.send({
      from: "WeSellPickleball <info@wesellpickleball.com>",
      to,
      subject: "Get Your WeSellPickleball.com Affiliate On...",
      html: customerWelcomeEmail(customerData),
    });

    // Send notification email to owner
    const { error: ownerError } = await resend.emails.send({
      from: "WeSellPickleball <onboarding@wesellpickleball.com>",
      to: "info@wesellpickleball.com",
      subject: "New Affiliate Signup Notification",
      html: ownerNotificationEmail(customerData),
    });

    return { success: !(customerError || ownerError) };
  } catch (err) {
    console.error("Unexpected error in sendEmail:", err);
    return { success: false, error: err.message };
  }
};

module.exports = { sendEmail };

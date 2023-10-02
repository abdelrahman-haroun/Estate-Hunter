const nodemailer = require("nodemailer");

// Create a transporter object using your Gmail credentials
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "abdelrahmn.haroun@gmail.com",
    pass: "xmernbeamjpnmfbs", // Use the App Password you generated
  },
});

// Function to send an email
function sendEmail(to, subject, textContent, htmlContent) {
  const mailOptions = {
    to: to,
    subject: subject,
    text: textContent,
    html: htmlContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}
module.exports = { sendEmail };

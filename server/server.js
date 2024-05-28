const express = require("express");
const sdk = require("@api/chimoney");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

sdk.auth("dc3f951321ad9dd15263cf8c0e64a2d216dc3b005201e5ae8fba685e52884c10");
sdk.server("https://api-v2-sandbox.chimoney.io");

app.post("/payout", async (req, res) => {
  const { email, valueInUSD, currency } = req.body;

  try {
    const response = await sdk.postV02PayoutsChimoney({
      chimoneys: [{ email, valueInUSD, currency }],
    });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password",
      },
    });

    let info = await transporter.sendMail({
      from: '"Chimoney" <your-email@gmail.com>',
      to: email,
      subject: "Chimoney Payout",
      text: `You have received a payout. Redeem it here: ${response.data.paymentLink}`,
    });

    console.log("Email sent: %s", info.messageId);

    res.json({ status: "success", data: response.data });
  } catch (error) {
    console.error("Error during payout:", error);

    // Log the error stack trace to help with debugging
    console.error(error.stack);

    // Send a more detailed error response
    res.status(500).json({
      status: "error",
      message: "Error when trying to payout",
      error: error.message,
      stack: error.stack,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

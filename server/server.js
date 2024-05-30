require("dotenv").config();
const express = require("express");
const sdk = require("@api/chimoney");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

sdk.auth(process.env.REACT_APP_API_KEY);
sdk.server(process.env.API_BASE_URL);

app.post("/payout", async (req, res) => {
  const { email, valueInUSD, currency } = req.body;

  try {
    const response = await sdk.postV02PayoutsChimoney({
      chimoneys: [{ email, valueInUSD, currency }],
    });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
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

    console.error(error.stack);

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

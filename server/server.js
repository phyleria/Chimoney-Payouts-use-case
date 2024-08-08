require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/payout", async (req, res) => {
  const { email, valueInUSD, currency } = req.body;

  const options = {
    method: 'POST',
    url: `${process.env.API_BASE_URL}/v0.2/payouts/chimoney`,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'X-API-KEY': process.env.REACT_APP_API_KEY
    },
    data: {
      chimoneys: [{ email, valueInUSD, currency }]
    }
  };

  try {
    const response = await axios.request(options);
    res.json({ status: "success", data: response.data });
  } catch (error) {
    console.error("Error during payout:", error);
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

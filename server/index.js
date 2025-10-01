const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./config/db");

const affiliateRoutes = require("./routes/affiliateRoutes");
const goalRoutes = require("./routes/goalRoutes");

const app = express();

// Allowed CORS origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "https://wesellpickleball-client.onrender.com",
  "https://wesellpickleball.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
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

connectDB();

app.use("/api/affiliate", affiliateRoutes);
app.use("/api/goal", goalRoutes);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));

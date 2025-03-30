require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require("./config/db");

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Routes
app.get("/", (req, res) => {
  res.send("API Running");
});

// Define Routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Dependencies and Modules
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users.route");
const app = express();
const port = 3000;

// Database Connection
const connection =
  "mongodb+srv://johnro_lebaste:johnro143@wdc028-course-booking.us4hm.mongodb.net/backend"; // Just for demo. Didn't put in .env file for this reason
mongoose.connect(connection);
const db = mongoose.connection;
db.on("open", () => console.log(`Connected to MongoDB`));

app.use(express.json());
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to ATM");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

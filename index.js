const express = require("express");
const app = express();
require("dotenv").config();
const coffeeRoutes = require("./routes/coffeeRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/coffee", (req, res) => {
  res.send("What would you like to drink?Type hot or iced after /api/coffee");
});
app.use("/api/coffee", coffeeRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

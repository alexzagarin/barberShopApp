require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const servicesController = require("../server/controller/services");
const customersController = require("../server/controller/customers");
const reservationsController = require("../server/controller/reservations");

// Route setup
app.use("/api/services", servicesController);
app.use("/api/customers", customersController);
app.use("/api/reservations", reservationsController);

// Basic route to check if the server is up
app.get("/", (req, res) => {
  res.send("Welcome to the BarberShop App API!");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/test", (req, res) => {
  res.send("Test route works");
});

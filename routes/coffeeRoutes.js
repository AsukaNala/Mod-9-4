const express = require("express");
const router = express.Router();
const coffeeController = require("../controllers/coffeeController");

router.get("/hot", (req, res) => {
  coffeeController.getHotCoffee(req, res);
});
router.get("/iced", (req, res) => {
  coffeeController.getIcedCoffee(req, res);
});

module.exports = router;

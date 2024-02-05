"use strict";
const axios = require("axios");

const getHotCoffee = async (req, res) => {
  const type = "hot";
  try {
    const response = await axios.get(
      "https://api.sampleapis.com/coffee/" + type
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
};

const getIcedCoffee = async (req, res) => {
  const type = "iced";
  try {
    const response = await axios.get(
      "https://api.sampleapis.com/coffee/" + type
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getHotCoffee, getIcedCoffee };

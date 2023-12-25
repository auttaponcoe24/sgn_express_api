const express = require("express");

const populationController = require("../controllers/population-controller.js");

const router = express.Router();

router.get("/", populationController.getAllPopulation);

module.exports = router;

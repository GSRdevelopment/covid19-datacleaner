const express = require("express");
const municipalitiesController = require("../controllers/municipalitiesController");

const router = express.Router();

router.route("/properties").get(municipalitiesController.properties);

module.exports = router;

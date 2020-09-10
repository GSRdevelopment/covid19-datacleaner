const express = require("express");
const municipalitiesController = require("../controllers/municipalitiesController");

const router = express.Router();

router.route("/properties").get(municipalitiesController.properties);
router.route("/geometry").get(municipalitiesController.geometry);

module.exports = router;

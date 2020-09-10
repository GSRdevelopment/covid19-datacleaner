const express = require("express");
const municipalitiesController = require("../controllers/municipalitiesController");
const municipalitiesGeometryController = require("../controllers/municipalitiesGeometryController");

const router = express.Router();

router.route("/properties").get(municipalitiesController.properties);
router.route("/geometry").get(municipalitiesGeometryController.geometry);

module.exports = router;

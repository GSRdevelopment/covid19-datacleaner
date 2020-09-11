const express = require("express");
const cors = require("cors");
const municipalitiesRouter = require("./routes/municipalitiesRouter");

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));

// Routes

app.use("/municipalities", municipalitiesRouter);

module.exports = app;

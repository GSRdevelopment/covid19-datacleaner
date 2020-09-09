const express = require("express");
const cors = require("cors");
const municipalitiesRouter = require("./routes/municipalitiesRouter");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use("/municipalities", municipalitiesRouter);

module.exports = app;

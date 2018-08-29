const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const reservationRoutes = require("./api/routes/reservationRoutes");

const app = express();

mongoose.connect("mongodb://localhost:27017/massageSalonDB");

var db = mongoose.connection;

db.on("open", function() {
  console.log("connected");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});

app.use("/reservation", reservationRoutes);

module.exports = app;

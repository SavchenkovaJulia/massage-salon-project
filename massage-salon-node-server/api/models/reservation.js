const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const reservationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    surname: String,
    email: String,
    phone: Number,
    treatment: String,
    duration: String,
    date: String,
    time: String,
    comment: String

});


module.exports = mongoose.model("Reservation", reservationSchema, "reservation")
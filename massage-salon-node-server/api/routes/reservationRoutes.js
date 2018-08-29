const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const Reservation = require("../models/reservation");

router.post("/", (req, res)=>{
    console.log(req.body)

    const reservation = new Reservation({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
        treatment: req.body.treatment,
        duration: req.body.duration,
        date: req.body.date,
        time: req.body.time,
        comment: req.body.comment,

    }, {versionKey:false});
    reservation.save().then(data=>{
        res.status(200).json(data);
    }).catch(err =>{
        res.status(500).json({"error": err})
    })
})


module.exports = router;
/********************* Requires *********************/

const express = require("express");
const mongoose = require("mongoose");
const app = express();

// **************************************

// **************************************



require("dotenv").config();
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/********************* Database *********************/

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected Database Successfully");
});

/********************** Routes **********************/


// **************************************

// ****************** ****** ********************

/**************** Listening Requests ****************/
const Port = process.env.PORT || 3000;
app.listen(Port, function (req, res) {
    console.log(`Server is started on port ${Port}`);
});

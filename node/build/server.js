"use strict";
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
var uri = "mongodb+srv://".concat(process.env.DBUSER, ":").concat(process.env.DBPASSWORD, "@cluster0.lpj0afg.mongodb.net/?retryWrites=true&w=majority");
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () { return console.log('Connected to database !'); })
    .catch(function () { return console.log('Something went wrong !'); });

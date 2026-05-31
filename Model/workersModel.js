const express = require('express');
const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  cNumber: {
    type: String,
    required: true,
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true,
  },
  workerType: {
    type: String,
    enum: ["Employee", "Contractor"],
    required: true,
  },
<<<<<<< HEAD
  salary: {
    type: Number,
    required: true,
  },

=======
 
>>>>>>> 5da1d31059ef00ae7a1bf5b4c8479a8001321ead
  address: {
    line1: String,
    line2: String,
  },
});

module.exports = mongoose.model("Worker", workerSchema);
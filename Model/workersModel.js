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
  salary: {
    type: Number,
    required: true,
  },

  address: {
    line1: String,
    line2: String,
  },
});

module.exports = mongoose.model("Worker", workerSchema);
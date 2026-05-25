const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
     trim: true
  },
  cnic: {
    type: String,
    required: true, 
    trim: true
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true
  },
  workerType: {
    type: String,
    enum: ["Employee", "Contractor"],
    required: true,
  },
  Salary:{
    type: Number,
    required: true
  },
  operations: [
    {
      type: String,
      enum: ["Flat", "Overlock", "Singer"],
    },
  ],
  address: {
    line1: String,
    line2: String,
  },
});


export default mongoose.model("Worker", workerSchema);

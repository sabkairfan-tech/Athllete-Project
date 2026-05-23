const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,

  cnic: String,
  mobileNumber: String,

  workerType: {
    type: String,
    enum: ["Employee", "Contractor"],
    required: true,
  },

  operations: [
    {
      type: String,
      enum: ["Flat", "Overlock", "Singer"],
    },
  ],

  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    line1: String,
    line2: String,
  },
});
export default mongoose.model("Worker", workerSchema);

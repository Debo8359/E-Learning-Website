const mongoose = require("mongoose");

const ntechnicalTemplate = new mongoose.Schema({
  cname: {
    type: String,
    required: true,
  },
  cdetails: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("technical", ntechnicalTemplate);

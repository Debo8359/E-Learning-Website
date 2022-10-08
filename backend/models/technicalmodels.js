const mongoose = require("mongoose");

const technicalTemplate = new mongoose.Schema({
  cname: {
    type: String,
    required: true,
  },
  cdetails: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ntechnical", technicalTemplate);

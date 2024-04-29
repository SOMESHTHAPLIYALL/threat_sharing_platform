const mongoose = require("mongoose");

const threatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  solution: {
    type: String,
  },
  file: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  showName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
});

const Threat = mongoose.model("Threat", threatSchema);
module.exports = Threat;

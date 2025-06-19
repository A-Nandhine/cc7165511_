const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },     // ISO date string
  time: { type: String, required: true },     // HH:mm string
  venue: { type: String, required: true },
  description: { type: String, required: true },
  image: String,                              // optional URL
  createdBy: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Event", eventSchema);

const mongoose = require("mongoose");
const entriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
  },
  content: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  imageurl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    require: true,
    enum: [
      "Momentum",
      "Coranavirus",
      "Gen",
      "Elemental",
      "OneZero",
      "Forge",
      "Human Parts",
      "Mind Cafe",
      "UX Collective",
      "The Journal Blog",
    ],
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("entries", entriesSchema);


const mongoose = require('mongoose')
const writersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    require: true,
    match: /^.+@.+\..+$/,
  },
  memberSince: {
    type: Date,
  },
})

module.exports = mongoose.model('writers', writersSchema)
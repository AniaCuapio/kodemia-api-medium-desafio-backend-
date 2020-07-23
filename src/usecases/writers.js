const Writers = require('../models/writers')


function getAll() {
  return Writers.find()
}

function create(writerData) {
  return Writers.create(writerData)
}

function remove(writerId) {
  return Writers.findByIdAndDelete(writerId)
}

function update(writerId, newWriterData) {
  return Entries.findByIdAndUpdate(writerId, newWriterData)
}

module.exports = {
  getAll,
  create,
  remove,
  update,
}

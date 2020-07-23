const Writers = require('../models/writers')

function getAll() {
  return Writers.find()
}
function getById(writerId) {
  return Writers.findById(writerId)
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
  getById,
  create,
  remove,
  update,
}


const Entries = require('../models/entries')
const entries = require('../models/entries')

function getAll() {
    return Entries.find()
}

function create(entryData) {
    return Entries.create(entryData)
}

function remove(entryId) {
    return Entries.findByIdAndDelete(entryId)
}

function update(entryId, newEntryData) {
    return Entries.findByIdAndUpdate(entryId, newEntryData)
}

module.exports = {
    getAll,
    create,
    remove,
    update
}
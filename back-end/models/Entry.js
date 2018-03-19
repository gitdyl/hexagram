var mongoose = require('mongoose')
var Schema = mongoose.Schema

var entrySchema = new Schema({
	journalEntry: String
})	

module.exports = mongoose.model('Entry', entrySchema)
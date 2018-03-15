
// finds entries from the model
exports.getEntry = function(req, res) {
	Entry.find(function(err, entry) {
		if (err) return res.json({ message: 'Entry cannot be found.'})
	})
}

// update Entry
exports.updateEntry = function(req, res) {
	Entry.updateEntry = function(err, entry) {
		Entry.findOne =({_id: req.params.id}, function(err, entry) {


			entry.save(function(error, entry){
				if (error) {
					return res.json({message: 'error'})
				}
				res.json(entry)
			})
		})
	}
}

// delete entry
exports.deleteEntry = function(req, res) {
	console.log(req.params._id)
	Entry.findByIdAndRemove(req.params.id, function(error, entry) {
		if (error) {
			return res.json({ message: 'error'})
		}
		return res.json ({ message: 'Entry deleted.'})
	})
}

// create entry
exports.createEntry = function(req, res) {
	console.log(req.body)
	var entry = new Entry ({
		// not sure what to put here. a string for the entry?
	})
	entry.save(function(error, savedEntry){
		if(error) {
			return res.json({ message: 'error'})
		}

		res.json(savedEntry)
	})
}




























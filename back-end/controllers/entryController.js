exports.getEntry = function(req,res) {
	res.json({ message: 'entry get success'})
}

exports.postEntry = function(req,res) {
	res.json({ message: 'entry post success'})
}

exports.putEntry = function(req,res) {
	res.json({ message: 'entry put success'})
}

exports.patchEntry = function(req,res) {
	res.json({ message: 'entry patched'})
}

exports.deleteEntry = function(req,res) {
	res.json({ message: 'entry delete sucess'})
}











// // finds entries from the model
// exports.getEntry = function(req, res) {
// 	Entry.find(function(err, entry) {
// 		if (err) return res.json({ message: 'Entry cannot be found.'})
// 	})
// }

// // update Entry
// exports.updateEntry = function(req, res) {
// 	Entry.updateEntry = function(err, entry) {
// 		Entry.findOne =({_id: req.params.id}, function(err, entry) {


// 			entry.save(function(error, entry){
// 				if (error) {
// 					return res.json({message: 'error'})
// 				}
// 				res.json(entry)
// 			})
// 		})
// 	}
// }

// // delete entry
// exports.deleteEntry = function(req, res) {
// 	console.log(req.params._id)
// 	Entry.findByIdAndRemove(req.params.id, function(error, entry) {
// 		if (error) {
// 			return res.json({ message: 'error'})
// 		}
// 		return res.json ({ message: 'Entry deleted.'})
// 	})
// }

// // create entry
// exports.createEntry = function(req, res) {
// 	console.log(req.body)
// 	var entry = new Entry ({
// 		// not sure what to put here. a string for the entry?
// 	})
// 	entry.save(function(error, savedEntry){
// 		if(error) {
// 			return res.json({ message: 'error'})
// 		}

// 		res.json(savedEntry)
// 	})
// }




























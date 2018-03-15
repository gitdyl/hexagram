exports.getUser = function(req,res) {
	res.json({ user: 'user gotten'})
}

exports.postUser = function(req,res) {
	res.json({ user: 'user posted'})
}

exports.putUser = function(req,res) {
	res.json({ user: 'created user'})
}

exports.patchUser = function(req,res) {
	res.json({ user: 'patched user success'})
}

exports.deleteUser = function(req,res) {
	res.json({ user: 'deleted user'})
}






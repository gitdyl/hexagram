const express = require('express')
const app = express()
const userController = require('../controllers/userController.js')
const entryController = require('../controllers/entryController.js')

app.get('/user', function(req,res) {
	res.json({ user: 'created user'})
})

app.post('/user', function(req,res) {
	res.json({ user: 'created user'})
})

app.put('/user', function(req,res) {
	res.json({ user: 'created user'})
})

app.delete('/user', function(req,res) {
	res.json({ user: 'created user'})
})





app.listen(3000, () => console.log("listen for request on port 7000"))

 
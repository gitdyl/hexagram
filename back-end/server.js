
// PACKAGES

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

/* body-parser config*/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* database hookup */
mongoose.connect('mongodb://localhost:27017/sun-moon-astro')
mongoose.connection.on('open', function() { console.log('db connected')})

// MODELS

require('./models/User')
require('./models/Entry')

// CONTROLLERS

const userController = require('./controllers/userController.js')
const entryController = require('./controllers/entryController.js')

// USER ROUTES 

console.log(userController.putUser)

app.get('/user', userController.getUser)

app.post('/user', userController.postUser)

app.put('/user', userController.putUser)

app.patch('/user', userController.putUser)

app.delete('/user', userController.deleteUser)

// ENTRY ROUTES

app.get('/entry', entryController.getEntry)

app.post('/entry', entryController.postEntry)

app.put('/entry', entryController.putEntry)

app.patch('/entry', entryController.patchEntry)

app.delete('/entry', entryController.deleteEntry)


// EVENT LISTENER

app.listen(3000, () => console.log("listen for request on port 3000"))

 
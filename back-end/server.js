const express = require('express')
const app = express()
const userController = require('../controllers/userController.js')
const entryController = require('../controllers/entryController.js')

app.listen(3000, () => console.log("listen for request on port 7000"))

 
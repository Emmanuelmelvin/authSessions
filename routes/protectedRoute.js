const express = require('express')
const dash = require("../controllers/dashboard")
const isAuth = require('../middleware/isAuth')

const Postrouter = express.Router()
Postrouter.use(isAuth)
Postrouter.get('/dashboard' , dash.postRetriver)

module.exports = Postrouter
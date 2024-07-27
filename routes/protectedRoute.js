const express = require('express')
const dash = require("../controllers/dashboard")


const Postrouter = express.Router()
Postrouter.use(isAuth)
Postrouter.get('dashboard' , dash.postRetriver)
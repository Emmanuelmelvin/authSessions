const express = require('express')
const dash = require("../controllers/dashboard")

const router = express.Router()
router.get('dashboard' , dash.postRetriver)
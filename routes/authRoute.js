const express = require('express')
const authControllers = require("../controllers/authControllers")

const router = express.Router()

//route to handle posts
router.post('/login' ,  authControllers.loginFunction)
router.post('/signup' , authControllers.signupFunction)

module.exports = router
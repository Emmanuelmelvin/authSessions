const express = require('express')
const authControllers = require("../controllers/authControllers")

const router = express.Router()

router.post('/login' ,  authControllers.loginFunction)
router.post('/register' , authControllers.signupFunction)

module.exports = router
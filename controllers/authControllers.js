const User = require("../models/userModel")

exports.signupFunction = async (req, res) => {

    const { username, email, password } = req.body
    try {
        const user = await User.create({ username, email, password })
        res.status(200).json({
            status: "success",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 'failed',
            body: `${error.message}`
        })
    }

}

exports.loginFunction = async (req, res) => {
    const { username , password } = req.body
    try{

        const user = await User.findOne({username})

        req.session.isAuth = true
        req.session.user = user
        
        res.status(200).json({
            status: "success",
        })

    } catch (error) { 
        console.log(error)
        res.status(401).json({
            status: "failed",
        })
    }
}
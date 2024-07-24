const express = require("express")
const session = require("express-session")
const MongoDBSession = require('connect-mongodb-session')
const MongoDBSessionInstance = MongoDBSession(session)
const mongoose = require('mongoose')
const app = express()

app.set('trust proxy', 1) // trust first proxy

const mongoURI = "mongodb://localhost:27017/sessions"
mongoose
    .connect(mongoURI)
    .then(() => {
        console.log('mongo ready')
        app.listen(5000, console.log("app listening at 5000"))
    }
    )
    .catch((error) => {
        console.log(error)
    })

const mongoStore =  new MongoDBSessionInstance({
    uri: mongoURI,
    collection: 'mySession'
})


app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: false,
    store: mongoStore
}))

app.get('/' , (req , res) => {
    req.session.isAuth = true
    res.send('Active!')
})


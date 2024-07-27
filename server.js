const express = require("express")
const session = require("express-session")
const MongoDBSession = require('connect-mongodb-session')
const MongoDBSessionInstance = MongoDBSession(session)
const mongoose = require('mongoose')
const router = require("./routes/authRoute")
const app = express()

const mongoURI = "mongodb://localhost:27017/sessions"

const mongoStore =  new MongoDBSessionInstance({
    uri: mongoURI,
    collection: 'mySession'
})
// app.set('trust proxy', 1) // trust first proxy
app.use(express.json())

app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: false,
    store: mongoStore
}))
app.use(router)

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

app.get('/' , (req , res) => {
    req.session.isAuth = true
    res.send('Active!')
})


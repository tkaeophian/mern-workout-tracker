require('dotenv').config()
const express = require('express')

// create express app
const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'})
})

// listen for request
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})
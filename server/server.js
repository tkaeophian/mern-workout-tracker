require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')
const compression = require('compression')
const helmet = require('helmet')
// create express app
const app = express()
app.use(express.json())
app.use(compression())
app.use(helmet())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONG_URL)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and Listening on port', process.env.PORT)
        })
    })
    .catch((error) => console.log(error))


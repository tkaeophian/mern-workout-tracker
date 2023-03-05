require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')
// create express app
const app = express()

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)

// listen for request
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})
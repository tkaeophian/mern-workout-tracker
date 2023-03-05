const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()
const { 
    createWorkout,
    getWorkouts,
    getWorkout 
} = require('../controllers/workoutController')

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a workout'})
})

router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a new workout'})
})

module.exports = router
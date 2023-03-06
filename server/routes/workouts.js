const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()
const { 
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const authGuard = require('../middleware/authGuard')

// register auth guard for all workout routes
router.use(authGuard)

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router
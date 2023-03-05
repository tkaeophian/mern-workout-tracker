const mongoose = require('mongoose')
const Workout = require('../models/workoutModel')

// GET All Workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}
// GET Single Workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({error : 'Record not found'})
    }

    res.status(200).json(workout)
}

// CREATE new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a workout


// UPDATE a workout

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout
}
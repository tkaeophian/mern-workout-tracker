const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({msg: 'GET All Workouts'})
})

router.get('/:id', (req, res) => {
    res.json({msg: 'GET single workout'})
})

router.post('/', (req, res) => {
    res.json({msg: 'POST a new workout'})
})

router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a workout'})
})

router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a new workout'})
})

module.exports = router
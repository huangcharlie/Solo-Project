const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.getWorkouts, (req, res) => {
  return res.status(200).json(res.locals.workouts);
})

router.post('/', controller.addWorkout, controller.getWorkouts, (req, res) => {
  return res.status(200).json(res.locals.workouts);
})

router.put('/', controller.updateWorkout, controller.getWorkouts, (req, res) => {
  return res.status(200).json(res.locals.workouts);
})

router.delete('/:_id', controller.removeWorkout, controller.getWorkouts, (req, res) => {
  return res.status(200).json(res.locals.workouts);
})

module.exports = router;

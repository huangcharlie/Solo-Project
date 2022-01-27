const db = require('./workoutModels');

const controller = {};

controller.getWorkouts = (req, res, next) => {
  const stringSQL = 'SELECT * FROM workouts ORDER BY date DESC, workout, _id DESC';
  db.query(stringSQL)
    .then(data => {
      res.locals.workouts = data.rows;
      return next();
    })
    .catch(err => next({
      log: `controller.getWorkouts: ERROR: ${err}`,
      message: { err: 'Error occurred in controller.getWorkouts. Check server logs for more details.' },
    }));
};

controller.addWorkout = (req, res, next) => {
  const { date, workout, weight, reps, notes } = req.body;
  const params = [ date, workout, weight, reps, notes ];
  const stringSQL = 'INSERT INTO workouts (date, workout, weight, reps, notes) VALUES ($1,$2,$3,$4,$5)';
  db.query(stringSQL, params)
    .then(data => {
      return next();
    })
    .catch(err => next({
      log: `controller.addWorkout: ERROR: ${err}`,
      message: { err: 'Error occurred in controller.addWorkout. Check server logs for more details.' },
    }));
};

controller.updateWorkout = (req, res, next) => {
  const { _id, date, workout, weight, reps, notes } = req.body;
  const params = [ _id, date, workout, weight, reps, notes ];
  const stringSQL = 'UPDATE workouts SET date = $2, workout = $3, weight = $4, reps = $5, notes = $6 WHERE _id = $1';
  db.query(stringSQL, params)
    .then(data => {
      return next();
    })
    .catch(err => next({
      log: `controller.updateWorkout: ERROR: ${err}`,
      message: { err: 'Error occurred in controller.updateWorkout. Check server logs for more details.' },
    }));
};

controller.removeWorkout = (req, res, next) => {
    const { _id } = req.params;
    const params = [ _id ];
    const stringSQL = 'DELETE FROM workouts WHERE _id=$1';
    db.query(stringSQL, params)
      .then(data => {
        return next();
      })
      .catch(err => next({
        log: `controller.removeWorkout: ERROR: ${err}`,
        message: { err: 'Error occurred in controller.removeWorkout. Check server logs for more details.' },
      }));
  };

controller.filtertWorkouts = (req, res, next) => {
    const startdate = req.body.startdate || '2022-01-01';
    const enddate = req.body.enddate || new Date().toLocaleDateString("sv");
    params = [ startdate, enddate ];
    const stringSQL = 'SELECT * FROM workouts WHERE date BETWEEN $1 AND $2 ORDER BY date, workout;';
    db.query(stringSQL, params)
      .then(data => {
        res.locals.workouts = data.rows;
        return next();
      })
      .catch(err => next({
        log: `controller.filtertWorkouts: ERROR: ${err}`,
        message: { err: 'Error occurred in controller.filtertWorkouts. Check server logs for more details.' },
      }));
  };

module.exports = controller;

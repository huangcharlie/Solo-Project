const db = require('./workoutModels');

const controller = {};

controller.getWorkouts = (req, res, next) => {
  const stringSQL = 'SELECT * FROM workouts ORDER BY date DESC, workout, _id DESC';
  db.query(stringSQL)
    .then(data => {
    //   console.log(data);
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
    //   console.log(data);
      // res.locals.addedCharacter = data.rows[0];
      return next();
    })
    .catch(err => next({
      log: `controller.addWorkout: ERROR: ${err}`,
      message: { err: 'Error occurred in controller.addWorkout. Check server logs for more details.' },
    }));
};

controller.filtertWorkouts = (req, res, next) => {
    const startdate = req.body.startdate || '2022-01-01';
    const enddate = req.body.enddate || new Date().toLocaleDateString("sv");
    params = [ startdate, enddate ];
    const stringSQL = 'SELECT * FROM workouts WHERE date BETWEEN $1 AND $2 ORDER BY date, workout;';
    db.query(stringSQL, params)
      .then(data => {
      //   console.log(data);
        res.locals.workouts = data.rows;
        return next();
      })
      .catch(err => next({
        log: `controller.filtertWorkouts: ERROR: ${err}`,
        message: { err: 'Error occurred in controller.filtertWorkouts. Check server logs for more details.' },
      }));
  };

// ADD MIDDLEWARE TO REMOVE A CHARACTER FROM FAVORITES HERE
// controller.removeFav = (req, res, next) => {
//   if(!Object.prototype.hasOwnProperty.call(res.locals, 'favs')) {
//     return next({
//       log: 'controller.removeFav: ERROR: Invalid or unfound required data on res.locals object - Expected res.locals.favs to be an object.',
//       message: { err: 'controller.removeFav: ERROR: Check server logs for details' },
//     });
//   }
  
//   const data = res.locals.favs;
//   delete data[req.params.id];
//   const jsonData = JSON.stringify(data);

//   fs.writeFile(path.resolve(__dirname, '../data/favs.json'), jsonData,
//     (err) => {
//       if (err) {
//         return next({
//           log: `controller.removeFav: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
//           message: { err: 'controller.removeFav: ERROR: Check server logs for details' },
//         });
//       }
//       return next();
//     },
//   );
// };

module.exports = controller;

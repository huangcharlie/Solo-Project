const fs = require('fs');
const path = require('path');

const controller = {};

controller.getWorkouts = (req, res, next) => {
  fs.readFile(path.resolve(__dirname, './db/workouts.json'),
    (err, data) => {
      if (err) {
        return next({
          log: `controller.getWorkouts: ERROR: ${err}`,
          message: { err: 'Error occurred in controller.getWorkouts. Check server logs for more details.' },
        });
      }
      const parsedData = JSON.parse(data);
      res.locals.workouts = parsedData;
      return next();
    },
  );
};

controller.addWorkout = (req, res, next) => {
  if(!('workouts' in res.locals) || typeof res.locals.workouts !== 'object') {
    return next({
      log: 'controller.addWorkout: ERROR: Invalid or unfound required data on res.locals object - Expected res.locals.workouts to be an object.',
      message: { err: 'controller.addWorkout: ERROR: Check server logs for details' },
    });
  }
  
  const { workout, weight, reps, notes } = req.body;
  const data = res.locals.workouts;
  const timestamp = new Date().toLocaleDateString("en-US", {timeZone: "America/Los_Angeles"});
  data.push({ workout, weight, reps, notes, timestamp });
  res.locals.workouts = data;
  const jsonData = JSON.stringify(data);

  fs.writeFile(path.resolve(__dirname, './db/workouts.json'), jsonData,
    (err) => {
      if (err) {
        return next({
          log: `controller.addWorkout: ERROR: ${err}`,
          message: { err: 'controller.addWorkout: ERROR: Check server logs for details' },
        });
      }
      return next();
    },
  );
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

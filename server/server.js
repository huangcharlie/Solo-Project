const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

const controller = require('./controller');

app.use(express.json()); // adds body prop on req object so middleware can access it
app.use(express.urlencoded({ extended: true }));

app.get('/workout', controller.getWorkouts, (req, res) => {
  return res.status(200).json(res.locals.workouts);
})

app.post('/workout', controller.addWorkout, controller.getWorkouts, (req, res) => {
  return res.status(200).json(res.locals.workouts);
})

app.post('/filterworkout', controller.filtertWorkouts, (req, res) => {
  return res.status(200).json(res.locals.workouts);
})

if(process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
  });
}

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }, 
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;

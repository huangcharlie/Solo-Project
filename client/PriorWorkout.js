import React from 'react';

const PriorWorkout = props => {
  const workouts = props.workouts.map((el, i) => 
    <li key={i}><b>Date: </b> {el.date}<br></br>
      <b>Workout: </b> {el.workout}<br></br>
      <b>Weight: </b> {el.weight} lbs<br></br>
      <b>Reps: </b>{el.reps}<br></br>
      <b>Notes: </b>{el.notes}</li>
  );

  return(
    <div >
      <h2>Prior 5 Workouts</h2>
      <ul>
        {workouts.slice(0, 5)}
      </ul>
    </div>
  );
};

export default PriorWorkout;
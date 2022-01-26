import React from 'react';

const PriorWorkout = props => {
  const workouts = props.workouts.map((el, i) => 
    <li key={i}><b>Timestamp: </b> {el.timestamp}<br></br>
      <b>Workout: </b> {el.workout}<br></br>
      <b>Weight: </b> {el.weight} lbs<br></br>
      <b>Reps: </b>{el.reps}<br></br>
      <b>Notes: </b>{el.notes}</li>
  );

  return(
    <div >
      <h2>Prior Workouts</h2>
      <ul>
        {workouts}
      </ul>
    </div>
  );
};

export default PriorWorkout;
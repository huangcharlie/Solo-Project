import React from 'react';

const PriorWorkout = props => {
  const workouts = props.workouts.map((el, i) => 
    <div className='workoutResult' key={i}>
      <b>Date: </b>{el.date.split('T')[0]}<br></br>
      <b>Workout: </b>{el.workout}<br></br>
      <b>Weight: </b>{el.weight} lbs<br></br>
      <b>Reps: </b>{el.reps}<br></br>
      <b>Notes: </b>{el.notes}<br></br>
      <button className='deleteButton' onClick={() => props.handleClick(el._id)}>Delete</button>
    </div>
  );

  return(
    <div >
      <h2>Prior 5 Workouts</h2>
      <div className='resultsContainer'>
        {workouts.slice(0, 5)}
      </div>
    </div>
  );
};

export default PriorWorkout;
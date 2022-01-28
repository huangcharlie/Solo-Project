import React from 'react';
import UpdateButton from './UpdateButton';

const PriorWorkout = props => {
  const workouts = props.workouts.map((el, i) => {
    const { _id, date, workout, weight, reps, notes } = el
    const props = { _id, date, workout, weight, reps, notes }
    return(
      <div className='workoutResult' key={i}>
        <b>Date: </b>{date.split('T')[0]}<br></br>
        <b>Workout: </b>{workout}<br></br>
        <b>Weight: </b>{weight} lbs<br></br>
        <b>Reps: </b>{reps}<br></br>
        <b>Notes: </b>{notes}<br></br>
        <button className='deleteButton' onClick={() => props.handleClick(_id)}>Delete</button>
        <UpdateButton {...props} />
      </div>
    )
  });

  return(
    <div className='innercontainer'>
      <h2>Prior 5 Workouts</h2>
      <div className='resultsContainer'>
        {workouts.slice(0, 5)}
      </div>
    </div>
  );
};

export default PriorWorkout;
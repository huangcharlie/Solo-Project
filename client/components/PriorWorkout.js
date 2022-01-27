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
      <button className='updateButton' onClick={() => {
        document.querySelector('#updateid').value = el._id,
        document.querySelector('#date3').value = el.date.split('T')[0],
        document.querySelector('#workout3').value = el.workout,
        document.querySelector('#weight3').value = el.weight,
        document.querySelector('#reps3').value = el.reps,
        document.querySelector('#notes3').value = el.notes,
        document.querySelector('#updateformcontainer').style.display = 'block'
      }}>Update</button>
    </div>
  );

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
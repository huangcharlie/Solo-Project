import React from 'react';
import UpdateButton from './UpdateButton';

const GetWorkoutByDate = props => {
  const workouts = props.date.map((el, i) => {
    const { _id, date, workout, weight, reps, notes } = el
    const attr = { _id, date, workout, weight, reps, notes }
    return(
      <div className='workoutResult' key={i}>
        <b>Date: </b>{date.split('T')[0]}<br></br>
        <b>Workout: </b>{workout}<br></br>
        <b>Weight: </b>{weight} lbs<br></br>
        <b>Reps: </b>{reps}<br></br>
        <b>Notes: </b>{notes}<br></br>
        <button className='deleteButton' onClick={() => props.handleClick(_id)}>Delete</button>
        <UpdateButton {...attr} />
      </div>
    )
  });

  return(
    <div className='innercontainer'>
      <h2>By Date Range</h2>
      <form className='form' id='getworkoutdate' onSubmit={e => {
        e.preventDefault();
        props.handleSubmit(document.querySelector('#startdate').value, document.querySelector('#enddate').value);
      }}>
        <div>
          <label htmlFor='startdate'>Start Date: </label>
          <input type='date' id='startdate' name='startdate' />
        </div>
        <div>
          <label htmlFor='enddate'>End Date: </label>
          <input type='date' id='enddate' name='enddate' />
        </div>
        <button className='submitButton' type='submit' value='submit'>Submit</button>
      </form>
      <div className='resultsContainer' id='dateFilterResults'>
        {workouts}
      </div>
    </div>
  );
};

export default GetWorkoutByDate;
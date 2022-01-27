import React from 'react';

const GetWorkoutByDate = props => {
  const workouts = props.date.map((el, i) => 
    <div className='workoutResult' key={i}>
      <b>Date: </b> {el.date.split('T')[0]}<br></br>
      <b>Workout: </b> {el.workout}<br></br>
      <b>Weight: </b> {el.weight} lbs<br></br>
      <b>Reps: </b>{el.reps}<br></br>
      <b>Notes: </b>{el.notes}<br></br>
      <button className='deleteButton' onClick={() => props.handleClick(el._id)}>Delete</button>
    </div>
  );

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
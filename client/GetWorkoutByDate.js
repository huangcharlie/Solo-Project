import React from 'react';

const GetWorkoutByDate = props => {
  const workouts = props.date.map((el, i) => 
    <div className='workoutResult' key={i}>
      {/* <b>Date: </b> {el.date.split('T')[0]}<br></br> */}
      <b>Workout: </b> {el.workout}<br></br>
      <b>Weight: </b> {el.weight} lbs<br></br>
      <b>Reps: </b>{el.reps}<br></br>
      <b>Notes: </b>{el.notes}
    </div>
  );

  return(
    <div >
      <h2>Workout By Date</h2>
      <form class="form" id='getworkoutdate' onSubmit={e => {
        e.preventDefault();
        props.handleSubmit(document.querySelector('#date2').value);
      }}>
        <div>
          {/* <label for="date">Date: </label> */}
          <input type="date" id="date2" name="date2"
          // value={new Date().toLocaleDateString("sv")}
          />
        </div>

        <button type="submit" value="submit">Submit</button>
      </form>
      <div className='resultsContainer'>
        {workouts}
      </div>
    </div>
  );
};

export default GetWorkoutByDate;
import React from 'react';

const GetWorkoutByType = props => {
  const workouts = props.type.reverse().map((el, i) => 
    <li key={i}><b>Timestamp: </b> {el.timestamp}<br></br>
      <b>Workout: </b> {el.workout}<br></br>
      <b>Weight: </b> {el.weight} lbs<br></br>
      <b>Reps: </b>{el.reps}<br></br>
      <b>Notes: </b>{el.notes}</li>
  );

  return(
    <div >
      <h2>Workout By Type</h2>
      <form class="form" id='getworkout' onSubmit={e => {
        e.preventDefault();
        props.handleSubmit(document.querySelector('#workout').value);
      }}>
        <div>
          <label for="workout">Workout: </label>
          <select name="workout" id="workout">
            <option value="Bench">Bench</option>
            <option value="Deadlift">Deadlift</option>
            <option value="Squat">Squat</option>
          </select>
        </div>

        <button type="submit" value="submit">Submit</button>
      </form>
      <ul>
        {workouts}
      </ul>
    </div>
  );
};

export default GetWorkoutByType;
import React from 'react';

const GetWorkoutByType = props => {
  const workouts = props.type.map((el, i) => 
    <li key={i}><b>Date: </b> {el.date}<br></br>
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
        props.handleSubmit(document.querySelector('#workout2').value);
      }}>
        <div>
          <label for="workout2">Workout: </label>
          <select name="workout2" id="workout2">
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
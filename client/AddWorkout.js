import React from 'react';

const AddWorkout = props => (
  <div >
    <h2>Add Workout</h2>
    <form id='addworkout' onSubmit={e => {
      e.preventDefault();
      props.handleSubmit({
        workout: document.querySelector('#workout').value,
        weight: document.querySelector('#weight').value,
        reps: document.querySelector('#reps').value,
        notes: document.querySelector('#notes').value,
      });
      // console.log(document.querySelector('#workout').value);
      // console.log(document.querySelector('#weight').value);
      // console.log(document.querySelector('#reps').value);
      // console.log(document.querySelector('#notes').value);
      // console.log(e.target);
      // document.querySelector('input').value = '';
    }}>
      <div>
        <label for="workout">Workout: </label>
        <select name="workout" id="workout">
          <option value="Bench">Bench</option>
          <option value="Deadlift">Deadlift</option>
          <option value="Squat">Squat</option>
        </select>
      </div>

      <div>
        <label for="weight">Weight: </label>
        <input type="text" id="weight" name="weight" required></input>
      </div>

      <div>
        <label for="reps">Reps: </label>
        <input type="text" id="reps" name="reps" required></input>
      </div>

      <div>
        <label for="notes">Notes: </label>
        <input type="text" id="notes" name="notes"></input>
      </div>

      <button type="submit" value="submit">Submit</button>
    </form>
  </div>
);

export default AddWorkout;
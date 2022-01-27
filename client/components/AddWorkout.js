import React from 'react';

const AddWorkout = props => (
  <div className='innercontainer'>
    <h2>Add Workout</h2>
    <form className="form" id='addworkout' onSubmit={e => {
      e.preventDefault();
      props.handleSubmit({
        date: document.querySelector('#date').value,
        workout: document.querySelector('#workout').value,
        weight: document.querySelector('#weight').value,
        reps: document.querySelector('#reps').value,
        notes: document.querySelector('#notes').value,
      });
      document.querySelector('#weight').value = '';
      document.querySelector('#reps').value = '';
      document.querySelector('#notes').value = '';
    }}>
      <div>
        <input type="date" id="date" name="date" />
      </div>

      <div>
        <label htmlFor="workout">Workout: </label>
        <select name="workout" id="workout">
          <option value="Bench">Bench</option>
          <option value="Deadlift">Deadlift</option>
          <option value="Squat">Squat</option>
        </select>
      </div>

      <div>
        <label htmlFor="weight">Weight: </label>
        <input type="text" id="weight" name="weight" required />
      </div>

      <div>
        <label htmlFor="reps">Reps: </label>
        <input type="text" id="reps" name="reps" required />
      </div>

      <div>
        <label htmlFor="notes">Notes: </label>
        <input type="text" id="notes" name="notes" />
      </div>

      <button type="submit" value="submit">Submit</button>
    </form>
  </div>
);

export default AddWorkout;
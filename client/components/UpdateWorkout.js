import React from 'react';

const UpdateWorkout = props => (
  <div className='innercontainer' id='updateform'>
    <h2>Update Workout</h2>
    <form className="form" id='updateworkout' onSubmit={e => {
      e.preventDefault();
      document.querySelector('#updateform').style.display = 'none';
      props.handleSubmit({
        _id: document.querySelector('#updateid').value,
        date: document.querySelector('#date3').value,
        workout: document.querySelector('#workout3').value,
        weight: document.querySelector('#weight3').value,
        reps: document.querySelector('#reps3').value,
        notes: document.querySelector('#notes3').value,
      });
    }}>
      <div>
        <input type="text" id="updateid" name="updateid" required />
        <input type="date" id="date3" name="date3" />
      </div>

      <div>
        <label htmlFor="workout3">Workout: </label>
        <select name="workout3" id="workout3">
          <option value="Bench">Bench</option>
          <option value="Deadlift">Deadlift</option>
          <option value="Squat">Squat</option>
        </select>
      </div>

      <div>
        <label htmlFor="weight3">Weight: </label>
        <input type="text" id="weight3" name="weight3" required />
      </div>

      <div>
        <label htmlFor="reps3">Reps: </label>
        <input type="text" id="reps3" name="reps3" required />
      </div>

      <div>
        <label htmlFor="notes3">Notes: </label>
        <input type="text" id="notes3" name="notes3" />
      </div>

      <button type="submit" value="submit">Submit</button>
    </form>
  </div>
);

export default UpdateWorkout;
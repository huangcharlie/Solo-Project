import React from 'react';

const UpdateButton = props => (
  <button className='updateButton' onClick={() => {
    document.querySelector('#updateid').value = props._id;
    document.querySelector('#date3').value = props.date.split('T')[0];
    document.querySelector('#workout3').value = props.workout;
    document.querySelector('#weight3').value = props.weight;
    document.querySelector('#reps3').value = props.reps;
    document.querySelector('#notes3').value = props.notes;
    document.querySelector('#updateformcontainer').style.animation='fadein 200ms linear';
    document.querySelector('#updateformcontainer').style.display = 'block';
  }}>Update</button>
);

export default UpdateButton;
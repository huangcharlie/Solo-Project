import React, { Component } from 'react';
import { render } from 'react-dom';
import AddWorkout from './AddWorkout';
import PriorWorkout from './PriorWorkout';
import GetWorkoutByType from './GetWorkoutByType';
import GetWorkoutByDate from './GetWorkoutByDate';
import styles from './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workouts: [],
      type: [],
      date: []
    };

    this.addWorkout = this.addWorkout.bind(this);
    this.getWorkoutByType = this.getWorkoutByType.bind(this);
    this.getWorkoutByDate = this.getWorkoutByDate.bind(this);
  }
  
  componentDidMount() {
    document.querySelector('#date').value = new Date().toLocaleDateString("sv");
    document.querySelector('#date2').value = new Date().toLocaleDateString("sv");
    fetch('/workout')
      .then(res => res.json())
      .then(data => {
        return this.setState({
          workouts: data
        });
      })
      .catch(err => console.log('App.componentDidMount: getPriorWorkout: ERROR: ', err));
  }

  addWorkout(data) {
    fetch('/workout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        return this.setState({
          ...this.state,
          workouts: data
        });
      })
      .catch(err => console.log('addWorkout: ERROR: ', err));
  }

  getWorkoutByType(workout) {
    const type = this.state.workouts.filter(el => el.workout === workout);
    return this.setState({
      ...this.state,
      type,
    })
  }

  getWorkoutByDate(day) {
    console.log(this.state.workouts);
    const date = this.state.workouts.filter(el => el.date.split('T')[0] === day);
    return this.setState({
      ...this.state,
      date,
    })
  }

  render() {
    return (
      <div id="container">
        <AddWorkout handleSubmit={this.addWorkout}/>
        <GetWorkoutByType handleSubmit={this.getWorkoutByType} type={this.state.type}/>
        <GetWorkoutByDate handleSubmit={this.getWorkoutByDate} date={this.state.date}/>
        <PriorWorkout workouts={this.state.workouts}/>
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));

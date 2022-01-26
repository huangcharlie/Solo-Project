import React, { Component } from 'react';
import { render } from 'react-dom';
import AddWorkout from './components/AddWorkout';
import PriorWorkout from './components/PriorWorkout';
import GetWorkoutByType from './components/GetWorkoutByType';
import GetWorkoutByDate from './components/GetWorkoutByDate';
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
    document.querySelector('#enddate').value = new Date().toLocaleDateString("sv");
    fetch('/workout')
      .then(res => res.json())
      .then(workouts => {
        return this.setState({
          workouts
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
      .then(workouts => {
        return this.setState({
          ...this.state,
          workouts
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

  getWorkoutByDate(startdate, enddate) {
    fetch('/filterworkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ startdate, enddate }),
      })
      .then(res => res.json())
      .then(date => {
        return this.setState({
          ...this.state,
          date
        });
      })
      .catch(err => console.log('getWorkoutByDate: ERROR: ', err));
    
    // const date = this.state.workouts.filter(el => el.date.split('T')[0] === startdate);
    // return this.setState({
    //   ...this.state,
    //   date,
    // })
  }

  render() {
    return (
      <div id="container">
          <div>
            <AddWorkout handleSubmit={this.addWorkout}/>
            <PriorWorkout workouts={this.state.workouts}/>
          </div>
        <GetWorkoutByType handleSubmit={this.getWorkoutByType} type={this.state.type}/>
        <GetWorkoutByDate handleSubmit={this.getWorkoutByDate} date={this.state.date}/>
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));

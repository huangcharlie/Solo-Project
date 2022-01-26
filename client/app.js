import React, { Component } from 'react';
import { render } from 'react-dom';
import AddWorkout from './AddWorkout';
import PriorWorkout from './PriorWorkout';
import GetWorkoutByType from './GetWorkoutByType';
import styles from './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workouts: [],
      type: []
    };

    this.addWorkout = this.addWorkout.bind(this);
    this.getWorkoutByType = this.getWorkoutByType.bind(this);
  }
  
  componentDidMount() {
    fetch('/workout')
      .then(res => res.json())
      .then(data => {
        return this.setState({
          workouts: data.reverse()
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
          workouts: data.reverse()
        });
      })
      .catch(err => console.log('addWorkout: ERROR: ', err));
  }

  getWorkoutByType(workout) {
    const type = this.state.workouts.filter(el => el.workout === workout).reverse();
    return this.setState({
      ...this.state,
      type,
    })
  }

  render() {
    return (
      <div id="container">
        <AddWorkout handleSubmit={this.addWorkout}/>
        <GetWorkoutByType handleSubmit={this.getWorkoutByType} type={this.state.type}/>
        <PriorWorkout workouts={this.state.workouts}/>
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));

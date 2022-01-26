import React, { Component } from 'react';
import { render } from 'react-dom';
import AddWorkout from './AddWorkout';
import PriorWorkout from './PriorWorkout';
import styles from './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workouts: []
    };

    // this.updateFavs = this.updateFavs.bind(this);
    this.addWorkout = this.addWorkout.bind(this);
    // this.updateCharacter = this.updateCharacter.bind(this);
    // this.updateNicknames = this.updateNicknames.bind(this);
    // this.formatCharacters = this.formatCharacters.bind(this);
  }
  
  componentDidMount() {
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
          workouts: data
        });
      })
      .catch(err => console.log('addWorkout: ERROR: ', err));
  }

  render() {
    return (
      <div>
        <AddWorkout handleSubmit={this.addWorkout}/>
        <PriorWorkout workouts={this.state.workouts}/>
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));

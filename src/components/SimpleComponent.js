import React from 'react';
import ReactDOM from 'react-dom';

export default class SimpleComponent extends React.Component {
  constructor(){
    super();

    this.state = {
      mood: "happy"
    }
    this.handleMoodClick = this.handleMoodClick.bind(this);
  }

  handleMoodClick(){
    this.state.mood === "happy" ? this.setState({mood: "sad"}) : this.setState({mood: "happy"});
  }


  render(){
    return (
      <div onClick = {this.handleMoodClick}>
        <p>{this.state.mood}</p>
      </div>
    )
  }
}

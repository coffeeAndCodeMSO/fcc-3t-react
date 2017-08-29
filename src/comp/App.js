import React, { Component } from 'react';
import Meh from './Meh';
import '../App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      text : "this is a thing",
      board : [[1,2,3],[4,5,6],[7,8,9]]
    };
    this.addNumber = this.addNumber.bind(this);
    this.subNumber = this.subNumber.bind(this);
  }

  addNumber(){
    this.setState({number: this.state.number + 1});
  }

  subNumber(){
    this.setState({number: this.state.number - 1});
  }

  removeFromListEnd(){
    this.setState({array: this.state.array.slice()});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>{this.state.number}</p>

          <button onClick={this.addNumber}>add ba da da</button>
          <button onClick={this.subNumber}>sub du bub bub</button>
          <button onClick={this.removeFromListEnd}>sub du bub bub</button>
        </div>
        <div className="Board">
          {this.state.board.map((value, index) => <div className="Square" key={index}>{value}</div>)}
        </div>
        <Meh paraText={this.state.text} counterNum={this.state.number}/>
      </div>
    );
  }
}

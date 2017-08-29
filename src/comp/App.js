import React, { Component } from 'react';
import Square from './Square';
import Choice from './Choice';
import '../App.css';

//  count for an end game if over 10
//  determine player character x
//  how many players

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plays: 0,
      board: ["","","","","","","","",""],
      playerChar1: "",
      playerChar2: "",
      player1Turn: true,
      winOptions: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,8],
      ]
    };
  }

  componentDidUpdate() {
    this.checkWin();
  }

  setPlayerChar = (char) => {
    if(char === "X") {
      this.setState({
        playerChar1: "X",
        playerChar2: "O"
      })
    } else {
      this.setState({
        playerChar1: "O",
        playerChar2: "X"
      })
    }
  }

  setSquareValue = (index) => {
    if(this.state.board[index] === "") {
      let sqValue = "";
      if(this.state.player1Turn) {
        sqValue = this.state.playerChar1;
      } else {
        sqValue = this.state.playerChar2;
      }
      let boardChange = this.state.board.slice(0);
      let playsChange = this.state.plays;
      playsChange++;
      boardChange.splice(index, 1, sqValue)
      this.setState({
        board: boardChange,
        plays: playsChange,
        player1Turn: !this.state.player1Turn
      });
    } else {
      console.log("you lie!");
    }
  }

  checkWin () {
    this.state.winOptions.forEach(current => {
      let str = this.state.board[current[0]] + this.state.board[current[1]] + this.state.board[current[2]]
      if (str === 'XXX') {
        console.log('player with X wins')
      } else if (str == 'OOO'){
        console.log('player with O wins')
      }
    })
  }

  computerPlay = () => {
    let computerPlay = Math.floor(Math.random() * 9);
    console.log(computerPlay);

  }

  isGameOver() {

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className="BoardContainer">
          <Choice setPlayer={this.setPlayerChar} text="X" />
          <Choice setPlayer={this.setPlayerChar} text="0" />
          <div className="Board">
            {this.state.board.map( (square, index, array) =>
                <Square
                  playerState={this.state.playerChar1}
                  sqKey={index}
                  sqChoice={square}
                  setValue={this.setSquareValue}
                />
            )}
            <h3>currently you are: {this.state.playerChar1}</h3>
          </div>
        </div>
      </div>
    );
  }
}

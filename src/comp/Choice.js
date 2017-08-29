import React, { Component } from 'react';

export default class Choice extends Component {
  constructor(props) {
    super(props);
  }

  // what are these buttons going to do?

  render() {
    return (
      <div>
        <button onClick={() => this.props.setPlayer(this.props.text)} className="Choice">{this.props.text}</button>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class Meh extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Meh">
        <p>{this.props.paraText}</p>
        <p>{this.props.counterNum}</p>
      </div>
    );
  }
}

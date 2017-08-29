import React, { Component } from 'react';

export default class Square extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button key={this.props.sqKey} onClick={() => this.props.setValue(this.props.sqKey)} className="Square">{this.props.sqChoice}</button>
      </div>
    );
  }
}

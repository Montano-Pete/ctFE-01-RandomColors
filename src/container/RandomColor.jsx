import React, { Component } from 'react';
import ColorSquare from '../components/square/ColorSquare';

class RandomColor extends Component {
  state = {
    currentColor: '#800000'
  }

  render() {
    return <ColorSquare currentColor={this.state.currentColor} />
  }
}

export default RandomColor;
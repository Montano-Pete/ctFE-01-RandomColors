import React, { Component } from 'react';
import ColorSquare from '../components/square/ColorSquare';

class RandomColor extends Component {
  state = {
    currentColor: '#800000'
  }

  colorRandomizer = () => {
    const arrOfColors = [
      '#191970',
      '#7FFF00',
      '#DDA0DD',
      '#FFD700',
      '#FFA07A',
      '#FFB6C1',
      '#B22222',
    ]

    return arrOfColors[Math.floor(Math.random() * arrOfColors.length)];
  }

  colorInterval = () => {
    setInterval(() => {
      this.setState({ currentColor: this.colorRandomizer() })
    }, 1000)
  }

  componentDidMount = () => {
    this.colorInterval()
  }

  render() {
    return <ColorSquare currentColor={this.state.currentColor} />
  }
}

export default RandomColor;
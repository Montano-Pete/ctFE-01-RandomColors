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

    // return arrOfColors[Math.floor(Math.random() * arrOfColors.length)];

    const noDuplicates = arrOfColors[Math.floor(Math.random() * arrOfColors.length)]

    if(noDuplicates !== this.state.currentColor) {
      return noDuplicates;
    }
    else {
      return 'url("https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg")';
    }
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
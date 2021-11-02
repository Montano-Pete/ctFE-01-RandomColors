import React from 'react';

const ColorSquare = ({ currentColor }) => {
  return <div style={{ width: 500, height: 500, background: currentColor }}></div>
};

export default ColorSquare;
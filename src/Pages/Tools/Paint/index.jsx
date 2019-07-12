import React from 'react';
import ReactPaint from 'react-paint';

const props = {
  style: {
    background: 'tomato',
    /* Arbitrary css styles */
  },
  brushCol: '#ffffff',
  lineWidth: 10,
  className: 'react-paint',
  height: 500,
  width: 500,
  onDraw: () => { console.log('i have drawn!'); },
};

class Paint extends React.Component {

  render() {
    return (
      <ReactPaint {...props} />
    );
  }
}

export default Paint;

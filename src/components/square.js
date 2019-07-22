import React from 'react';
import '../index.css';

export default function Square(props) {
    return (
      <button className={"square " + props.shade}
      onClick={props.onClick}
      style={props.style}>
      </button>
    );
  
}

//Above we are adding a statless component (Square). It renders one square in its color and piece (if exists), the complete info of which is recieved through props in the form of a style object, onClick and shade of square(dark/light).
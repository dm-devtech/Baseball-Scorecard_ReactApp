import React from 'react';

const Display = (props) => {
  return(
    <div  className="body-text">
      <div>Strikes: {props.strikes}</div>
      <div>Balls: {props.balls}</div>
    </div>
  )
}

export default Display;

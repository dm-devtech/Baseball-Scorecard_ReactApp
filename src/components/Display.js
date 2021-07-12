import React from 'react';
import { Fragment } from 'react';

const Display = (props) => {
  return(
    <Fragment>
    <div className="Header">Baseball Scorecard</div>
    <div className="body-text">
      <div className="strikes">Strikes: {props.strikes}</div>
      <div className="Balls">Balls: {props.balls}</div>
    </div>
    </Fragment>
  )
}

export default Display;

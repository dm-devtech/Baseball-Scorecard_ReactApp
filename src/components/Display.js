import React from 'react';
import { Fragment } from 'react';

const Display = (props) => {
  return(
    <div>
      <h1 className="display-1">Baseball Scorecard</h1>
        <div className="display-1">
        <div class="h2">Strikes: {props.strikes}</div>
        <div class="h2">Balls: {props.balls}</div>
        </div>
    </div>
  )
}

export default Display;

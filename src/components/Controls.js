import React from 'react';

const Controls = (props) => {
  return (
    <div className="buttons">
      <a type="button" class="btn btn-outline-dark btn-lg" onClick={props.strike}>Strike</a>
      <a type="button" class="btn btn-outline-dark btn-lg" onClick={props.ball}>Ball</a>
      <a type="button" class="btn btn-outline-dark btn-lg" onClick={props.foul}>Foul</a>
      <a type="button" class="btn btn-outline-dark btn-lg" onClick={props.hit}>Hit</a>
    </div>
  )
}

export default Controls;

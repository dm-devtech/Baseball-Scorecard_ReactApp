import React from 'react';

const Controls = (props) => {
  return (
    <div className="buttons">
      <button className="click" onClick={props.strike}>Strike</button>
      <button className="click" onClick={props.ball}>Ball</button>
      <button className="click" onClick={props.foul}>Foul</button>
      <button className="click" onClick={props.hit}>Hit</button>
    </div>
  )
}

export default Controls;

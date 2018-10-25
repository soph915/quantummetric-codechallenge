import React from 'react';

function RangeInput(props) {
  return (
    <div>
      <input 
        name="input"
        type="text"
        className="inline"
        onChange={event => {props.updateRangeInput(event, props.id, 0)}}
      ></input>
      <div className="inline"> and </div>
      <input 
        name="input" 
        type="text" 
        className="inline" 
        onChange={event => {props.updateRangeInput(event, props.id, 1)}} 
      ></input>
    </div>
  );
}


export default RangeInput

import React from 'react';

function Input(props) {
  return (
      <input className="input" 
        name="input"
        type="text"
        onChange={event => {props.updateQuery(event, props.id)}}
      ></input>
  );
}

export default Input

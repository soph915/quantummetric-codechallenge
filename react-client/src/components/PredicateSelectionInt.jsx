import React from 'react';

function predicateSelectionInt(props) {
  return (
    <div className="select-style">
      <select 
        onChange={event => {props.updateState(event, props.id) }}
        name="predicate"
      >
        <option>Select</option>
        <option value='range'>range</option>
        <option value='less_than_or_equal'>less than or equal</option>
        <option value='equals'>equals</option>
        <option value='does_not_equal'>does not equal</option>
        <option value='greater_than_or_equal'>greater than or equal</option>
      </select>
    </div>
  );
}


export default predicateSelectionInt
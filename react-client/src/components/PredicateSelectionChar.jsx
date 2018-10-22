import React from 'react';

function PredicateSelectionChar(props) {
  return (
    <div className="select-style">
      <select 
      onChange={event => {props.updateState(event, props.id) }}
      name="predicate"
      >
        <option>Select</option>
        <option value="starts_with">starts with</option>
        <option value="does_not_start_with">does not start with</option>
        <option value="char_equals">equals</option>
        <option value="char_does_not_equal">does not equal</option>
        <option value="contains">contains</option>
        <option value="does_not_contain">does not contain</option>
        <option value="in_list">in list</option>
        <option value="not_in_list">not in list</option>
        <option value="contains_all">contains all</option>
      </select>
    </div>
  );
}


export default PredicateSelectionChar
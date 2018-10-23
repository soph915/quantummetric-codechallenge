import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'range', label: 'range', name:'predicate' },
  { value: 'less_than_or_equal', label: 'less than or equal', name:'predicate'  },
  { value: 'equals', label: 'equals', name:'predicate'  },
  { value: 'does_not_equal', label: 'does not equal', name:'predicate'  },
  { value: 'greater_than_or_equal', label: 'greater than or equal', name:'predicate'  },
];

//todo: range 

function predicateSelectionInt(props) {
  return (
    <div className='select-style'>
      <Select
        onChange={event => {props.updateState(event, props.id)}}
        options={options}
      />
    </div>
  );
}


export default predicateSelectionInt
import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'range', label: 'range', name:'predicate' },
  { value: 'less_than_or_equal', label: 'less than or equal', name:'predicate'  },
  { value: 'equals', label: 'equals', name:'predicate'  },
  { value: 'does_not_equal', label: 'does not equal', name:'predicate'  },
  { value: 'greater_than_or_equal', label: 'greater than or equal', name:'predicate'  },
];

function predicateSelectionInt(props) {
  const customStyles = {
    control: (base) => ({
      ...base,
      height: '50px', 
    }),
  };  

  return (
    <div className='select-style input'>
      <Select
        onChange={event => {props.updateQuery(event, props.id); props.updateEvent(event);}}
        options={options}
        styles={customStyles}
      />
    </div>
  );
}


export default predicateSelectionInt
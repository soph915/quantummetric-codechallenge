import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'starts_with', label: 'starts with', name:'predicate' },
  { value: 'does_not_start_with', label: 'does not start with', name:'predicate'  },
  { value: 'char_equals', label: 'equals', name:'predicate'  },
  { value: 'char_does_not_equal', label: 'does not equal', name:'predicate'  },
  { value: 'contains', label: 'contains', name:'predicate'  },
  { value: 'does_not_contain', label: 'does not contain', name:'predicate' },
  { value: 'in_list', label: 'in list', name:'predicate'  },
  { value: 'not_in_list', label: 'not in list', name:'predicate'  },
  { value: 'contains_all', label: 'contains all', name:'predicate'  }
];


function PredicateSelectionChar(props) {
  const customStyles = {
    control: (base) => ({
      ...base,
      height: '50px'
    }),
  };  

  return (
    <div className='select-style input'>
      <Select
        onChange={event => {props.updateQuery(event, props.id)}}
        options={options}
        defaultValue={options[0]}
        styles={customStyles}
      />
    </div>
  );
}


export default PredicateSelectionChar


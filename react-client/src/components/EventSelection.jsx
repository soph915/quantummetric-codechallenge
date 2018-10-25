import React from 'react';
import Select from 'react-select';

const options = [
  { value: null, label: 'Event Triggered', name:null },
  { value: 'user_email', label: 'User Email', name:'event' },
  { value: 'user_first_name', label: 'First Name', name:'event' },
  { value: 'user_last_name', label: 'Last Name', name:'event' },
  { value: 'screen_width', label: 'Screen Width', name:'event' },
  { value: 'screen_height', label: 'Screen Height', name:'event' },
  { value: 'visits', label: '# of Visits', name:'event' },
  { value: 'page_response', label: 'Page Response time (ms)', name:'event' },
  { value: 'domain', label: 'Domain', name:'event' }, 
  { value: 'path', label: 'Page Path', name:'event' }
];


function EventSelection(props) {

  const customStyles = {
    control: (base) => ({
      ...base,
      height: '50px'
    }),
};



  return (
    <div className='select-style row-item event'>
      <Select
        onChange={event => {props.updateQuery(event, props.id); props.updateEvent(event);}}
        defaultValue={options[0]}
        options={options}
        styles={customStyles}
      />
    </div>
  );
}


export default EventSelection



/*
https://github.com/JedWatson/react-select/issues/1322
https://stackoverflow.com/questions/49848999/how-to-reduce-the-size-of-react-select-in-v2
*/
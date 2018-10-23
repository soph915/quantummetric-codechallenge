import React from 'react';
import Select from 'react-select';

const options = [
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
  return (
    <div className='select-style'>
      <Select
        onChange={event => {props.updateState(event, props.id); props.updateEvent(event);}}
        options={options}
      />
    </div>
  );
}


export default EventSelection

import React from 'react';

function EventSelection(props) {
  return (
    <div className='select-style'>
      <select 
        onChange={event => {props.updateState(event, props.id); props.updateEvent(event)}}
        name="event"
      >
        <option>Event Triggered</option>
        <option value="user_email">User Email</option>
        <option value="user_first_name">First Name</option>
        <option value="user_last_name">Last Name</option>
        <option value="screen_width">Screen Width</option>
        <option value="screen_height">Screen Height</option>
        <option value="visits">Visits</option>
        <option value="page_response">Page Response</option>
        <option value="domain">Domain</option>
        <option value="path">Path</option>
      </select>
    </div>
  );
}


export default EventSelection

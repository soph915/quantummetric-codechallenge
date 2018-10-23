import React from 'react';
import EventSelection from './EventSelection.jsx';
import PredicateSelectionInt from './PredicateSelectionInt.jsx';
import PredicateSelectionChar from './PredicateSelectionChar.jsx';

class QueryRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      event: null
    }
    this.deleteRow = this.deleteRow.bind(this)  
    this.updateEvent = this.updateEvent.bind(this)      
  }

  deleteRow() {
    this.setState({active:false})
  }

  updateEvent(event) {
    this.setState({ [event.name]: event.value });
  }

  render() {
    const active = this.state.active
    const event = this.state.event
    let predicateOptions 

    if (event === "screen_width" || event === "screen_height" || event === "visits" || event === "page_response") {
      predicateOptions = <PredicateSelectionInt id={this.props.id} updateState={this.props.updateState}/>
    } else{
      predicateOptions = <PredicateSelectionChar id={this.props.id} updateState={this.props.updateState}/>
    }

    if (active) {

      return (
        <div className="query-row">

          <div className="delete-button" 
            onClick={() => { this.props.removeFromQueries(this.props.id); this.deleteRow() }}>
            <button > - </button>
          </div>
          <EventSelection id={this.props.id} updateEvent={this.updateEvent} updateState={this.props.updateState}/>
          {predicateOptions}
          <input onChange={event => this.props.updateState(event, this.props.id)}
            name="input"
          ></input>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }

  }


}

export default QueryRow
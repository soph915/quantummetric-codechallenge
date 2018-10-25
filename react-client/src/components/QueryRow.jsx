import React from 'react';
import EventSelection from './EventSelection.jsx';
import PredicateSelectionInt from './PredicateSelectionInt.jsx';
import PredicateSelectionChar from './PredicateSelectionChar.jsx';
import RangeInput from './RangeInput.jsx';
import Input from './Input.jsx';

class QueryRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      event: null,
      predicate: null, 
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
    const predicate = this.state.predicate

    let predicateOptions
    let inputOptions

    if (event === "screen_width" || event === "screen_height" || event === "visits" || event === "page_response") {
      predicateOptions = <PredicateSelectionInt id={this.props.id} updateQuery={this.props.updateQuery} updateEvent={this.updateEvent}/>
    } else{
      predicateOptions = <PredicateSelectionChar id={this.props.id} updateQuery={this.props.updateQuery}/>
    }

    if (predicate === 'range') {
      inputOptions = <RangeInput id={this.props.id} updateRangeInput={this.props.updateRangeInput}/>
    } else {
      inputOptions = <Input id={this.props.id} updateQuery={this.props.updateQuery}/>
    }

    //todo: doesn't show delete button if one row 

    if (active) {

      return (
        <div className="query-row">
          {this.props.rows != 1 && 
            <div 
              className="row-item delete-button input" 
              onClick={() => { this.props.removeFromQueries(this.props.id); this.deleteRow() }}
            >
              <button > - </button>
            </div>
          }
          <EventSelection id={this.props.id} updateEvent={this.updateEvent} updateQuery={this.props.updateQuery}/>
          {predicateOptions}
          {inputOptions}
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
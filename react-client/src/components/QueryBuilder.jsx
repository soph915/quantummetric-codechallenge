import React from 'react';
import QueryRow from './QueryRow.jsx';
const axios = require("axios");


class QueryBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows:1,
      queries: [],
      sql: null
    }
    this.addRow = this.addRow.bind(this)
    this.executeQuery = this.executeQuery.bind(this) 
    this.updateState = this.updateState.bind(this)  
    this.removeFromQueries= this.removeFromQueries.bind(this)     
  }

  addRow(){
    this.setState({rows: this.state.rows+1});
  }

  removeFromQueries(id){
    let currentQueriesState = this.state.queries.slice();
    currentQueriesState[id] = {}
    this.setState({queries:currentQueriesState})
  }

  executeQuery(){
    let self=this;
    axios.get('/query', {
      params: {
        queries: this.state.queries
      }
    })
    .then(function(response){
      self.setState({sql: response.data});
    })
    .catch(function(error) {
      console.log(error)
    })

  }

  updateState(event, id) {
    let currentQueries = this.state.queries.slice();
    if (!currentQueries[id]) {
      currentQueries[id] = {}
    }
    currentQueries[id][event.target.name]= event.target.value;
    this.setState({queries:currentQueries})
  }

  render(){

    let queryList = [];

    for (let i=0; i<this.state.rows; i++) {
      queryList.push(<QueryRow key={i} id={i} query={this.state.queries} updateState={this.updateState} removeFromQueries={this.removeFromQueries}/>)
    }

    return (
      <div className='builder-body'>
        <div>{queryList}</div>
        <div className="and-button" >
          <button onClick={this.addRow}> AND </button>
        </div>
        <div>{this.state.sql}</div>
        <div className="search-button">
          <button onClick={this.executeQuery}> Search</button>
        </div>

      </div>
    )

  }

}

  
export default QueryBuilder


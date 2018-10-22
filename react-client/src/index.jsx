import React from 'react';
import ReactDOM from 'react-dom';
import QueryBuilder from './components/QueryBuilder.jsx';

class App extends React.Component {
  render() {
      return (
        <div>
          <header> SEARCH FOR SESSIONS </header>
          <QueryBuilder/>
        </div>

      );
    }
 
}

ReactDOM.render(<App />, document.getElementById('app'));
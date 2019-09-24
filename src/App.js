import React, { Component } from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import countries from './countries';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <h1>All the Countries of the World!</h1>
          <p>Begin typing to autocomplete country names</p>
          <AutoCompleteText items={countries}/>
        </div>
      </div>
    );
  }
}

export default App;

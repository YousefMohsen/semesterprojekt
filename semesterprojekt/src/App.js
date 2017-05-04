import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchresult from './Components/Searchresult/Searchresult'
import SearchField from './Components/SearchField/SearchField'
//import flightStore from "./Stores/FlightStore";

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Yojondo</h2>
        </div>
        <p className="App-intro">

        </p>
          <SearchField/>

          <Searchresult/>
      </div>
    );
  }
}

export default App;
//          <Searchresult resultList={flightStore.Flights.slice()}/>           <img src={logo} className="App-logo" alt="logo" />


//

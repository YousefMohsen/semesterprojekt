import React, { Component } from 'react';
import logo from './Images/YJLogo.png';
import './App.css';
import Searchresult from './Components/Searchresult/Searchresult'
import SearchField from './Components/SearchField/SearchField'
//import flightStore from "./Stores/FlightStore";

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <h2>More than a trip..</h2>
        </div>

          <div className="contentStart">
          <SearchField/>
          <Searchresult/>


          </div>

      </div>
    );
  }
}

export default App;
//          <Searchresult resultList={flightStore.Flights.slice()}/>           <img src={logo} className="App-logo" alt="logo" />


//

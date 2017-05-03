/**
 * Created by You7inho on 01/05/2017.
 */
import React, { Component } from 'react';
//import {observer} from 'mobx-react';
import flightStore from '../Stores/FlightStore';
import './SearchField.css';

class SearchFile extends Component {
    constructor() {
        super();
        this.buttonClicked = this.buttonClicked.bind(this)
console.log("heeej");

    }

    buttonClicked(){
        console.log("testsd");
        console.log(flightStore.getData());
        console.log(flightStore.flights.slice());

    }
    render() {

        return (
            <div>
                <button type="button"  onClick={this.buttonClicked}>Search</button>

                <div className="flightsContainer">

                    <div className="flightBox">


                        dgf
                    </div>

                </div>
            </div>
        );
    }
}

export default SearchFile;
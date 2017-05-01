/**
 * Created by You7inho on 01/05/2017.
 */
import React, { Component } from 'react';
import './SearchField.css';
import FlightStore from '../Stores/FlightStore';

class SearchFile extends Component {
    constructor() {
        super();
        this.buttonClicked = this.buttonClicked.bind(this)
console.log("heeej");

    }

    buttonClicked(){
        alert("hej");
        console.log("testsd");

    }
    render() {

        return (
            <div>
                <button type="button"  onClick={this.buttonClicked}>Search</button>


            </div>
        );
    }
}

export default SearchFile;
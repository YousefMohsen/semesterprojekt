/**
 * Created by You7inho on 01/05/2017.
 */
import React, { Component } from 'react';
import './SearchField.css';

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
                <button type="button" onclick={this.buttonClicked}>Search</button>


                <p>

                </p>
            </div>
        );
    }
}

export default SearchFile;
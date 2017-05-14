/**
 * Created by You7inho on 01/05/2017.
 */
import React, {Component} from "react";
//import {observer} from 'mobx-react';
import flightStore from "../../Stores/FlightStore";
import "./SearchField.css";

class SearchFile extends Component {
    constructor() {
        super();
        this.buttonClicked = this.buttonClicked.bind(this)
        this.getDestination = this.getDestination.bind(this)
        this.getDate = this.getDate.bind(this)

    //    this.state = {Flights: flightStore.Flights.slice()};

    }



    buttonClicked(){

        if(flightStore.newDate.length>0||flightStore.setDestination().length>0){
            flightStore.getAllFlights();


        } else{alert("Udfyld venligst alle felter")}


/*this.setState({
    flights: flightStore.Flights.slice()
});*/
     //   console.log("testsd");
      //  console.log(flightStore.getData());
        //console.log(flightStore.Flights.slice());



    }




     getDestination(event) {
    var value = event.target.value;
    //     console.log("destination");
flightStore.setDestination(value);
    //console.log(value);

     }

    getDate(evt) {
        var value = evt.target.value;
        //console.log("date");
flightStore.setDate(value);
      //  console.log(value);


    }
    getSeats(evt) {
        var value = evt.target.value;
        console.log("seats");
       flightStore.setSeats(value);
        //  console.log(value);


    }

    render() {

        return (
            <div>

                <div className="flightBox">



                <select className="destinationBox " onChange={this.getDestination}>
                    <option value="" disabled="disabled" selected="selected">Please select a destination</option>
                    <option value="CPH">Copenhagen</option>
                    <option value="SXF">Berlin</option>
                    <option value="STN">London</option>
                    <option value="CDG">Paris</option>

                    <option value="BCN">Barcelona</option>
                </select>

                <input className="dateBox" type="date" onChange={this.getDate} />
                  <input type="text" className="destinationBox" value="1" onChange={this.getSeats}/>

                    <button type="button"  onClick={this.buttonClicked}>Search</button>

                </div>

                <div className="flightsContainer">




                </div>
            </div>
        );
    }
}

export default SearchFile;
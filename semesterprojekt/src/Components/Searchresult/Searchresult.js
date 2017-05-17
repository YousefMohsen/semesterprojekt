/**
 * Created by Yousef Mohsen on 03/05/2017.
 */

import React, {Component} from "react";
import {observer} from "mobx-react";
import "./Searchresult.css";
import flightStore from "../../Stores/FlightStore";
import TestFetch from "../../Stores/TestFetch";

@observer

class Searchresult extends Component {
   constructor() {
 super();
       this.countryCodeToName = this.countryCodeToName.bind(this);



  console.log("hej fra constructor" + this.countryCodeToName("CPH"));

    this.renderFlightList = this.renderFlightList.bind(this);

       this.renderResult = this.renderResult.bind(this);



       TestFetch.constructor();
    }


    countryCodeToName(code){

        switch(code) {
            case "CPH":
                return "Copenhagen";
                break;
            case "SXF":
                return "Berlin";
                break;
            case "STN":
                return "London";
                break;
            case "CDG":
                return "Paris";

                break;
            case "BCN":
                return "Barcelona";
                break;
            default:
                return code;
        }


    }

    renderFlightList(airlineName, flightsList){
      console.log(flightsList);

        const result = flightsList.map((flight) => {



          return  <div className="resultBox">


                <div className="leftInfoBox">
                    <h1 className="resultBoxHeader">{ this.countryCodeToName( flight.origin)} -  {this.countryCodeToName( flight.destination)}</h1>
                    <h1 className="resultBoxInfo"> Date: {flight.date.substring(0,10)}</h1>
                    <h1 className="resultBoxInfo">Traveltime: {flight.traveltime} hours</h1>
                    <h1 className="resultBoxInfo">Number of seats: {flight.numberOfSeats}</h1>
                    <h1 className="resultBoxInfo">Depature time: {flight.date.substring(11,16)} </h1>
                    <h1 className="resultBoxInfo">Airline: {airlineName} </h1>


                </div>

                <div className="rightInfoBox">
                    <h1 className="resultBoxHeader">{flight.totalPrice} $</h1>
                    <div className="bookButton" > Book</div>



                </div>
            </div>
        });
        return result;

    }
testH1(name,list){


}
    renderResult(airlineList){


        const result = airlineList.map((a) => {
       return this.renderFlightList(a.airline,a.flights.slice())}


            )
        //

 return result;

    }




    render() {

        //const test = <h1>hej med dig</h1>  ;

       const flights = flightStore.Flights.slice();
        console.log(flights);

        const resultList = this.renderResult(flights);



        return (

            <div className="resultcontainer">

                {resultList}


            </div>
        );
    }
}

export default Searchresult;

//               <img  src={'../../Images/bookButton.png'}  />
/*
 <h1>{flights[0].airline}</h1>
 return this.renderResultList(a.airline, a.flights.slice());}
 <p>{flights.length} flight(s) found</p>
 */
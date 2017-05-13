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

    this.renderResultList = this.renderResultList.bind(this);


   TestFetch.data();
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

    renderResultList(flightsList){

        const result = flightsList.map(function(flight)  {



          return  <div className="resultBox">


                <div className="leftInfoBox">
                    <h1 className="resultBoxHeader">{ flight.origin} - {flight.destination}</h1>
                    <h1 className="resultBoxInfo"> Date: {flight.date}</h1>
                    <h1 className="resultBoxInfo">Traveltime: {flight.traveltime} hours</h1>
                    <h1 className="resultBoxInfo">Number of seats: {flight.numberOfSeats}</h1>
                    <h1 className="resultBoxInfo">Depature: 07:00 </h1>

                </div>

                <div className="rightInfoBox">
                    <h1 className="resultBoxHeader">3685 kr</h1>
                    <div className="bookButton" > Book</div>



                </div>
            </div>
        });
        return result;

    }




    render() {
        //const test = <h1>hej med dig</h1>  ;
const flightsL = flightStore.Flights.slice();

     const resultList = this.renderResultList(flightsL);
      // console.log(resultList);



        return (
            <div className="resultcontainer">
<p>{flightsL.length} flight(s) found</p>
                {resultList}
            </div>
        );
    }
}

export default Searchresult;

//               <img  src={'../../Images/bookButton.png'}  />
/*

 */
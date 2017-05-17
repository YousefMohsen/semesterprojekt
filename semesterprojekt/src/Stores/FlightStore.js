/**
 * Created by You7inho on 01/05/2017.
 */
import  {observable, computed, action} from "mobx";
import fetchHelper from "./fetchHelper"
const URL = 'http://localhost:8084/Backend/api/flights/all';
var dumbFlights = [{"airline":"Yojondo airline","flights":[{"flightID":"Id14581","flightNumber":"Flight1951","date":"2017-05-18T00:00:00.000Z","numberOfSeats":10,"totalPrice":40,"traveltime":23,"origin":"STN","destination":"CDG"},{"flightID":"Id12731","flightNumber":"Flight19751","date":"2017-05-18T00:00:00.000Z","numberOfSeats":10,"totalPrice":48,"traveltime":24,"origin":"STN","destination":"CDG"},{"flightID":"Id8791","flightNumber":"Flight18111","date":"2017-05-18T00:00:00.000Z","numberOfSeats":10,"totalPrice":50,"traveltime":5,"origin":"STN","destination":"CPH"},{"flightID":"Id12431","flightNumber":"Flight5631","date":"2017-05-18T00:00:00.000Z","numberOfSeats":10,"totalPrice":58,"traveltime":15,"origin":"STN","destination":"BCN"},{"flightID":"Id4831","flightNumber":"Flight641","date":"2017-05-18T00:00:00.000Z","numberOfSeats":10,"totalPrice":52,"traveltime":24,"origin":"STN","destination":"CPH"}]},{"airline":"AngularJS Airline","flights":[{"flightID":"3257-1495157400000","flightNumber":"COL3257","date":"2017-05-18T21:30:00.000Z","numberOfSeats":10,"totalPrice":600.0,"traveltime":90,"origin":"STN","destination":"CPH"},{"flightID":"3257-1495081800000","flightNumber":"COL3257","date":"2017-05-18T00:30:00.000Z","numberOfSeats":10,"totalPrice":750.0,"traveltime":90,"origin":"STN","destination":"CPH"}]}];
class FlightsStore {

    @observable Flights = [];
    newDate = "";
    newDestination = "";
    newSeats = 1;

    constructor() {
     //  this.testMethod();
        //this.getFlightByDestination("CPH");

    }

    @action
    setErrorMessage(err) {
        this.errorMessage = err;
    }
    @action
    setMessageFromServer(msg) {
        this.messageFromServer = msg;
    }

    setDate(date) {
        this.newDate = date + "T00:00:00.000Z";
    }

    setDestination(dest) {

        this.newDestination = dest;

    }
    setSeats(seat) {

        this.newSeats = seat;

    }

    search() {
        if (this.newDate.length > 0) {
            this.getFlightByDate(this.newDate)
        }
        else if (this.newDestination.length > 0) {
            this.getFlightByDestination(this.newDestination)
        }
        else {
            this.getAllFlights()
        }


    }


    @action
    testMethod() {
        this.Flights = dumbFlights;
console.log(this.Flights.slice());
    }


    getAllFlights() {  //
        this.getFlights(this.newDestination,this.newDate,this.newSeats);

    }

    @action
    setFlight(newFlightLis){
console.log(newFlightLis);
        this.Flights = JSON.parse(newFlightLis);

    }

    getFlights(from,date,seats) { //
        this.errorMessage = "";
        this.messageFromServer = "";
        let errorCode = 200;
        const options = fetchHelper.makeOptions("GET", false);
       const exturl = URL + "/" + from +'/'+date+'/'+seats;
        console.log(exturl);
        fetch(exturl, {method: 'GET'})
            .then((res) => {
                if (res.status > 200 || !res.ok) {
                    errorCode = res.status;
                    console.log("error"+errorCode);
                }
                console.log("response: "+errorCode);


                return res.text();
            })
            .then((res) => {
                console.log("in second then");
                if (errorCode !== 200) {
                    console.log("l 133");

                    throw new Error(`${res.error.message} (${res.error.code})`);
                }
                else {

                    //

                //   console.log(res);
                    //container = res;
                   this.setFlight(res);



                    //console.log(res.length);
                  //  this.setMessageFromServer(res.message);
                }
            }).catch(err => {
            //This is the only way (I have found) to veryfy server is not running
            this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
            console.log("exception");
            console.log(this.errorMessage);
            console.log(URL);

        })

    }

    @action
    getFlightByDestination(destination) { //
        this.errorMessage = "";
        this.messageFromServer = "";
        let errorCode = 200;
        const options = fetchHelper.makeOptions("GET", false);

       // const exturl = URL + "api/flightinfo/" + destination +'/2017-03-04T00:00:00.000Z/1';
        const exturl = URL + "books";
        console.log(exturl);
         fetch(exturl, {method: 'GET'})
            .then((res) => {
                if (res.status > 200 || !res.ok) {
                    errorCode = res.status;
                    console.log("error"+errorCode);
                }
                console.log("response: "+errorCode);


                return res.text();
            })
            .then((res) => {
            console.log("in second then");
          if (errorCode !== 200) {
              console.log("l 133");

              throw new Error(`${res.error.message} (${res.error.code})`);
                }
                else {

                    //
                    console.log(res);
                    //container = res;
                    //this.Flights = res;



                    //console.log(res.length);
                    this.setMessageFromServer(res.message);
                }
            }).catch(err => {
                //This is the only way (I have found) to veryfy server is not running
                this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
                console.log("exception");
                console.log(this.errorMessage);
                console.log(URL);

            })
        //set tickets to 1

    }
    /*

    @action
    getFlightByDate(date) { //janus
        this.errorMessage = "";
        this.messageFromServer = "";
        let errorCode = 200;
        const options = fetchHelper.makeOptions("GET", false);


        return fetch(URL + "api/flights/dates/" + date, options)
            .then((res) => {
                if (res.status > 200 || !res.ok) {
                    errorCode = res.status;
                    console.log("error");
                }
                return res.json();
            })
            .then((res) => {
                console.log("l 71");
                if (errorCode !== 200) {
                    throw new Error(`${res.error.message} (${res.error.code})`);
                }
                else {

                    //console.log(res);

                    //container = res;
                    this.Flights = res;
                    console.log(res);

                    //console.log(res.length);
                    this.setMessageFromServer(res.message);
                }
            }).catch(err => {
                //This is the only way (I have found) to veryfy server is not running
                this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
                console.log("exception");
                console.log(this.errorMessage);
                console.log(URL);

            })
        //set tickets to 1


    }*/
}

export default new FlightsStore();
//2017-05-18T00:00:00.000Z
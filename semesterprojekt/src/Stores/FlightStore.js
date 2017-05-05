/**
 * Created by You7inho on 01/05/2017.
 */
import  {observable, computed, action} from "mobx";
import fetchHelper from "./fetchHelpers"
const URL = require("../../package.json").serverURL;
var dumbFlights = [{
    "flightID": "3256-1493733600000",
    "numberOfSeats": 1,
    "date": "2017-05-02T10:00:00.000Z",
    "totalPrice": 65,
    "traveltime": 90,
    "origin": "CPH",
    "destination": "STN",
    "flightNumber": "COL3256"
},
    {
        "flightID": "3256-1493766000000",
        "numberOfSeats": 1,
        "date": "2017-05-02T19:00:00.000Z",
        "totalPrice": 50,
        "traveltime": 90,
        "origin": "CPH",
        "destination": "STN",
        "flightNumber": "COL3256"
    },
    {
        "flightID": "2216-1493751600000",
        "numberOfSeats": 1,
        "date": "2017-05-02T15:00:00.000Z",
        "totalPrice": 70,
        "traveltime": 60,
        "origin": "CPH",
        "destination": "SXF",
        "flightNumber": "COL2216"
    },
    {
        "flightID": "2214-1493719200000",
        "numberOfSeats": 1,
        "date": "2017-05-02T06:00:00.000Z",
        "totalPrice": 75,
        "traveltime": 60,
        "origin": "CPH",
        "destination": "SXF",
        "flightNumber": "COL2214"
    }];
var dumbFlights1 = [{
    "flightID": "3256-1493733600000",
    "numberOfSeats": 1,
    "date": "2017-05-02T10:00:00.000Z",
    "totalPrice": 65,
    "traveltime": 90,
    "origin": "CPH",
    "destination": "BCN",
    "flightNumber": "COL3256"
}];
class FlightsStore {

    @observable Flights = [];
    newDate = "";
    newDestination = "";


    constructor() {
        this.testMethod();
    }


    setDate(date) {
        this.newDate = date + "T00:00:00.000Z";
        console.log("date sat: " + this.newDate);
    }

    setDestination(dest) {

        this.newDestination = dest;
        console.log("dest sat: " + this.newDestination);

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
    getData() {
        this.Flights = dumbFlights;

    }

    @action
    testMethod() {
        this.Flights = dumbFlights1;

    }


    @action
    getAllFlights() {  //janus

    }

    @action
    getFlightByDestination(destination) { //janus
        this.errorMessage = "";
        this.messageFromServer = "";
        let errorCode = 200;
        const options = fetchHelper.makeOptions("GET", false);


        return fetch(URL + "api/flights/destinations/" + destination, options)
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

    }

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


    }
}

export default new FlightsStore();
//2017-05-18T00:00:00.000Z
/**
 * Created by You7inho on 01/05/2017.
 */
import  {observable, computed, action} from "mobx";
import fetchHelper from "./fetchHelper"
const URL = 'http://localhost:8084/Backend/api/flights';
var dumbFlights =[{"flightID":"Id14501","flightNumber":"Flight8781","date":"2017-05-18T00:00:00.000Z","numberOfSeats":10,"totalPrice":36,"traveltime":64,"origin":"BCN","destination":"SXF"},{"flightID":"Id5691","flightNumber":"Flight931","date":"2017-05-18T00:00:00.000Z","numberOfSeats":10,"totalPrice":52,"traveltime":173,"origin":"BCN","destination":"CPH"},{"flightID":"Id5071","flightNumber":"Flight131","date":"2017-05-18T00:00:00.000Z","numberOfSeats":10,"totalPrice":25,"traveltime":152,"origin":"BCN","destination":"STN"},{"flightID":"Id12491","flightNumber":"Flight14901","date":"2017-05-18T00:00:00.000Z","numberOfSeats":10,"totalPrice":39,"traveltime":134,"origin":"BCN","destination":"CPH"},{"flightID":"Id10511","flightNumber":"Flight11711","date":"2017-05-18T00:00:00.000Z","numberOfSeats":10,"totalPrice":57,"traveltime":61,"origin":"BCN","destination":"CDG"},{"flightID":"Id3451","flightNumber":"Flight7241","date":"2017-05-18T00:00:00.000Z","numberOfSeats":10,"totalPrice":40,"traveltime":102,"origin":"BCN","destination":"CDG"}];
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
    newSeats = 1;

    constructor() {
        this.testMethod();
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
    getData() {
        this.Flights = dumbFlights;

    }

    @action
    testMethod() {
        this.Flights = dumbFlights1;

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
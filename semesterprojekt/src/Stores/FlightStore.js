/**
 * Created by You7inho on 01/05/2017.
 */
import  {observable, computed , action} from "mobx";
var dumbFlights = [ {
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
var dumbFlights1 =  [ {
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

 @observable Flights =[];
     newDate="";
    newDestination="";


    constructor() {
        this.testMethod();
    }



setDate(date){
        this.newDate = date+"T00:00:00.000Z";
        console.log("date sat: " +this.newDate);
}
setDestination(dest){

    this.newDestination = dest;
    console.log("dest sat: " +this.newDestination);

}

search(){
    if(this.newDate.length>0){this.getFlightByDate(this.newDate)}
    else if(this.newDestination.length>0){this.getFlightByDestanation(this.newDestination)}
    else {this.getAllFlights()}


}
@action
    getData(){
    this.Flights = dumbFlights;

    }
@action
testMethod(){
this.Flights = dumbFlights1;

}

    @action
    getAllFlights(){  //janus

    }
    @action
    getFlightByDestanation(destination){ //janus

        //set tickets to 1

    }
    @action
    getFlightByDate(date){ //janus
        //set tickets to 1






    }
}
export default new FlightsStore();
//2017-05-18T00:00:00.000Z
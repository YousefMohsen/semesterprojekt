/**
 * Created by You7inho on 01/05/2017.
 */
import mobx, {observable, computed , action} from "mobx";

class FlightsStore {

//    @observable
    var flights =[];


    constructor() {
        console.log(this.Flights[0])
        console.log(this.Flights[1])
        this.getData();

        console.log(this.Flights[0])
        console.log(this.Flights[1])
    }


   // @action
    getData(){
        flights = [{"id":77},{"id":1010}];
console.log("getting data...");

    }


}
export default new FlightsStore();

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package RandomData;

import entity.Airline;
import entity.Flight;
import java.util.ArrayList;
import java.util.Random;

/**
 *
 * @author Yousef Mohsen
 */
public class RandomFlights {
    String[] airports = new String[5];
    String airlineName = "Yojondo airline";
    public RandomFlights() {
        initData();
    }
    
    private void initData(){
    airports[0] = "CPH";
    airports[1] = "SXF";
    airports[2] = "STN";
    airports[3] = "CDG";
    airports[4] = "BCN";
    }
    
        public  String getDestination(){
        int i = new Random().nextInt(5);
      

        return airports[i];
    }
    
    
        public Airline getFlightsFrom(String from, String date, int seats){
        ArrayList<Flight> flightsList = new ArrayList<Flight>();
        int amount = new Random().nextInt(10)+1;
        for (int i = 0; i <= amount; i++) {
                    String dest = getDestination();

            Flight fl = new Flight();
            fl.setFlightID("Id"+new Random().nextInt(1500)+1);
            fl.setFlightNumber("Flight"+new Random().nextInt(2000)+1);
            fl.setOrigin(from);
            fl.setDate(date);
            fl.setNumberOfSeats(seats);
            fl.setTotalPrice(new Random().nextInt(50)+20);
            fl.setTraveltime(new Random().nextInt(24)+1);
           
            while( dest.equals(from)){
            dest = getDestination();}
            
            
            fl.setDestination(dest);
            flightsList.add(fl);
        }
        return new Airline(airlineName,flightsList);
    }
    
    
}

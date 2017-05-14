/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.company;

import java.util.Random;

/**
 *
 * @author Janus
 */
public class OurAirline {
    
    public static String getDestination(){
        int i = new Random().nextInt(5)+1;
        String retur = "";
        switch  (i){
            case 1: retur = "SXF";
            break;
            
            case 2: retur = "CPH";
            break;
            
            case 3: retur = "STN";
            break;
            
            case 4: retur = "CDG";
            break;
            
            case 5: retur = "BCN";
            break;
        }
        return retur;
    }
    
    
    public static Airline getFlightsFrom(String from, String date, int tickets){
        Airline al = new Airline();
        int amount = new Random().nextInt(5)+1;
        for (int i = 0; i <= amount; i++) {
            Flight fl = new Flight();
            fl.setFlightID("Id"+new Random().nextInt(1500)+1);
            fl.setFlightNumber("Flight"+new Random().nextInt(2000)+1);
            fl.setOrigin(from);
            fl.setDate(date);
            fl.setNumberOfSeats(new Random().nextInt(30)+1);
            fl.setTotalPrice(new Random().nextInt(50)+1);
            fl.setTraveltime(new Random().nextInt(150)+1);
            fl.setDestination(getDestination());
            al.flights.add(fl);
        }
        return al;
    }
    
    public static Airline getFlightsFromTo(String from, String to, String date, int tickets){
        Airline al = new Airline();
        int amount = new Random().nextInt(5)+1;
        for (int i = 0; i <= amount; i++) {
            Flight fl = new Flight();
            fl.setFlightID("Id"+new Random().nextInt(1500)+1);
            fl.setFlightNumber("Flight"+new Random().nextInt(2000)+1);
            fl.setOrigin(from);
            fl.setDate(date);
            fl.setNumberOfSeats(new Random().nextInt(30)+1);
            fl.setTotalPrice(new Random().nextInt(50)+1);
            fl.setTraveltime(new Random().nextInt(150)+1);
            fl.setDestination(to);
            al.flights.add(fl);
        }
        return al;
        
    }
}

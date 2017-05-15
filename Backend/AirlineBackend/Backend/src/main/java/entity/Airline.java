/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.util.ArrayList;

/**
 *
 * @author Yousef Mohsen
 */
public class Airline {
    private String airline;//name
    private ArrayList<Flight> flights;
    
    public Airline(String airline, ArrayList<Flight> flights) {
        this.airline = airline;
        this.flights = flights;
    }

    public String getAirline() {
        return airline;
    }

    public void setAirline(String airline) {
        this.airline = airline;
    }

    public ArrayList<Flight> getFlights() {
        return flights;
    }

    public void setFlights(ArrayList<Flight> flights) {
        this.flights = flights;
    }

    @Override
    public String toString() {
        return "Airline{" + "airline=" + airline + ", flights=" + flights.size() + '}';
    }
    

}

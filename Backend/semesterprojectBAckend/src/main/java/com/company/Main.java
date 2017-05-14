/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.company;

import com.google.gson.Gson;
import com.rest.Flights;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author Yousef Mohsen
 */
public class Main {
    public static void main(String[] args) {
            Persistence.generateSchema("pu", null);

    EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");

    EntityManager em = emf.createEntityManager();
    
    Main m = new Main();
    
        System.out.println(m.getFlightsFrom("SFX", "2017-05-04T00:00:00.000Z", 1));
    
    
    
    }
    List<String> airlines = Arrays.asList("http://airline-plaul.rhcloud.com/api/flightinfo/");
    private static Gson gson = new Gson();
    public String getFlightsFrom( String from,
                                             String date,
                                             int tickets) {
        List<Airline> outputs = new ArrayList<Airline>();
        
        
        outputs.add(OurAirline.getFlightsFrom(from,date,tickets));
                
        //make it multiple threads later
        //here make multithreading or what its called
        for (int i = 0; i <= airlines.size(); i++) {
            outputs.add(Flights.flyer(airlines.get(i)+ from + "/" + date + "/" + tickets));
        }
                       
                       
        return gson.toJson(outputs);
    }
}

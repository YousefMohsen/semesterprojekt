/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import RandomData.FlightsCollector;
import RandomData.RandomFlights;
import com.google.gson.Gson;
import entity.Airline;
import entity.Flight;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Yousef Mohsen
 */
@Path("flights")
public class FlightsResource {

    Gson gson = new Gson();
    RandomFlights rf = new RandomFlights();
    FlightsCollector fc = new FlightsCollector();

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of FlightsResource
     */
    public FlightsResource() {
    }

    /**
     * Retrieves representation of an instance of rest.FlightsResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        //TODO return proper representation object  
        return "hey there";
    }

    /**
     * Retrieves representation of an instance of com.rest.Flights
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Path("{from}/{date}/{seats}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFlightsFrom(@PathParam("from") String from,
            @PathParam("date") String date,
            @PathParam("seats") int seats) {

        return gson.toJson(rf.getFlightsFrom(from, date, seats)); //  gson.toJson(outputs);
    }

    @GET
    @Path("all/{from}/{date}/{seats}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFlightsFromAll(@PathParam("from") String from,
            @PathParam("date") String date,
            @PathParam("seats") int seats) {
        try {

            String parameters = from + "/" + date + "/" + seats;

            ArrayList<Airline> result = fc.fromAirlines(parameters);
            return gson.toJson(result);

        } catch (MalformedURLException ex) {
            return "error";

        }
    }

    /**
     * PUT method for updating or creating an instance of FlightsResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import Facades.BookingFacade;
import RandomData.FlightsCollector;
import RandomData.RandomFlights;
import com.google.gson.Gson;
import entity.Airline;
import entity.Booking;
import entity.Flight;
import entity.Person;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import static javax.ws.rs.HttpMethod.POST;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author Yousef Mohsen
 */
@Path("flights")
public class FlightsResource {

    Gson gson = new Gson();
    BookingFacade bf = new BookingFacade();
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

    @POST
    @Path("/booking")
    public Response addUser( //change type to Response to improve the quality of the program: 
            @FormParam("name") String name,
            @FormParam("email") String email,
            @FormParam("phone") String phone) {
            

   Person nPerson = new Person(name, phone, email); 
//     Booking nBooking = new Booking(nPerson,null);   //add flight later    
  bf.addNewBookingDemo(nPerson);//change return type to boolean, and modify it with the response status, so it returns error code if failed to persist
//     
     
      return  Response.status(200)
                .entity("new booking is called, name : " + name + ", email : " + email + " phone "+phone)
                .build();
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

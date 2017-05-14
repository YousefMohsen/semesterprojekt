///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//package rest;
//
///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//
//
//
//import com.company.Airline;
//import com.company.OurAirline;
//import com.google.gson.Gson;
//import java.io.BufferedReader;
//import java.io.InputStream;
//import java.io.InputStreamReader;
//import java.net.URL;
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//import java.util.function.Function;
//import java.util.stream.Collectors;
//import javax.net.ssl.HttpsURLConnection;
//import javax.ws.rs.core.Context;
//import javax.ws.rs.core.UriInfo;
//import javax.ws.rs.Produces;
//import javax.ws.rs.Consumes;
//import javax.ws.rs.GET;
//import javax.ws.rs.Path;
//import javax.ws.rs.PUT;
//import javax.ws.rs.PathParam;
//import javax.ws.rs.core.MediaType;
//import java.util.function.Function;
//
///**
// * REST Web Service
// *
// * @author Janus
// */
//@Path("flights")
//public class Flights {
//
//    @Context
//    private UriInfo context;
//    
//    private static Gson gson = new Gson();
//    
//    List<String> airlines = Arrays.asList("pathtojensairline","nextairline");
//    
//    
//    private static Airline flyer (String airline){
//        HttpsURLConnection conn = null;
//        try {
//            URL url = new URL(airline);
//            conn = (HttpsURLConnection) url.openConnection();
//            InputStream is = conn.getInputStream();
//            BufferedReader rd = new BufferedReader(new InputStreamReader(is));
//            StringBuilder res = new StringBuilder();
//            String line;
//            while ((line = rd.readLine()) != null) {
//                res.append(line);
//                res.append('\r');
//            }
//            rd.close();
//            return gson.fromJson(res.toString(), Airline.class);
//        } catch (Exception e) {
//            e.printStackTrace();
//            return null;
//        } finally {
//            if (conn != null) {
//                conn.disconnect();
//            }
//        }
//    };
//
//
//    /**
//     * Creates a new instance of ApiResource
//     */
//    public Flights() {
//    }
//
//    /**
//     * Retrieves representation of an instance of com.rest.Flights
//     * @return an instance of java.lang.String
//     */
//    @GET
//    @Path("{from}/{date}/{tickets}")
//    @Produces(MediaType.APPLICATION_JSON)
//    public String getFlightsFrom(@PathParam("from") String from,
//                                            @PathParam("date") String date,
//                                            @PathParam("tickets") int tickets) {
//        List<Airline> outputs = new ArrayList<Airline>();
//        
//        
//        outputs.add(OurAirline.getFlightsFrom(from,date,tickets));
//                
//        //make it multiple threads later
//        //here make multithreading or what its called
//        for (int i = 0; i <= airlines.size(); i++) {
//            outputs.add(flyer(airlines.get(i) + "flights/" + from + "/" + date + "/" + tickets));
//        }
//                       
//                       
//        return gson.toJson(outputs);
//    }
//    
//    @GET
//    @Path("{from}/{to}/{date}/{tickets}")
//    @Produces(MediaType.APPLICATION_JSON)
//    public String getFlightsFromTo(@PathParam("from") String from,
//                                            @PathParam("to") String to,
//                                            @PathParam("date") String date,
//                                            @PathParam("tickets") int tickets) {
//        List<Airline> outputs = new ArrayList<Airline>();
//        
//        
//        outputs.add(OurAirline.getFlightsFromTo(from,to,date,tickets));
//                
//        //make it multiple threads later
//        //here make multithreading or what its called
//        for (int i = 0; i <= airlines.size(); i++) {
//            outputs.add(flyer(airlines.get(i) + "flights/" + from + "/" + to + "/" + date + "/" + tickets));
//        }
//                       
//                       
//        return gson.toJson(outputs);
//    }
//
//
//}

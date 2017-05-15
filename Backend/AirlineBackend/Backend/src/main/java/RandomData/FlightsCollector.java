/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package RandomData;

import com.google.gson.Gson;
import static com.google.gson.internal.bind.TypeAdapters.URL;
import entity.Airline;
import entity.Flight;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.lang.management.ManagementFactory;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.function.Consumer;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Yousef Mohsen
 */
public class FlightsCollector {

    private ArrayList<String> airlineAddresses = new ArrayList<String>();
    Gson gson = new Gson();
    //      URL url = new URL("http://airline-plaul.rhcloud.com/api/flightinfo/STN/2017-05-19T00:00:00.000Z/3");

    public FlightsCollector() {

        airlineAddresses.add("http://airline-plaul.rhcloud.com/api/flightinfo/");
        airlineAddresses.add("http://localhost:8084/Backend/api/flights/");

        //additional airlines here

    }

    public ArrayList<Airline> fromAirlines(String parameters) throws MalformedURLException{

        ArrayList result = new ArrayList<Airline>();

        airlineAddresses.parallelStream().forEach(airlineAddress -> {

            try {
                System.out.println(airlineAddress);
                
                URL url = new URL(airlineAddress + parameters);
                
                Airline collectedData = collectData(url);
                
                if (collectedData != null) {
                    result.add(collectedData);
                }
            } catch (MalformedURLException ex) {

            }

        }
        );
        return result;
    }

    public Airline collectData(URL url) {

        try {

            HttpURLConnection connection = (HttpURLConnection) url
                    .openConnection();
            connection.setDoOutput(true);
            connection.setRequestMethod("GET");

            if (connection.getResponseCode() == HttpURLConnection.HTTP_OK) {
                // OK
                String thisLine = null;
                String result = "";

                BufferedReader br = new BufferedReader(new InputStreamReader((connection.getInputStream())));
                while ((thisLine = br.readLine()) != null) {

                    result += thisLine;
                }
                //   System.out.println(result);
                System.out.println("status ok!");
                String jsonString = gson.toJson(result);
                //    System.out.println(jsonString);

                Airline airline = gson.fromJson(result, Airline.class);
                return airline;

            } else {
                // Server returned HTTP error code.
                System.out.println("error!");
                return null;
            }
        } catch (MalformedURLException e) {
            // ...
            System.out.println("Exception: " + e.getMessage());
            return null;

        } catch (IOException e) {
            System.out.println("Exception: " + e.getMessage());
            return null;

        }

    }

}

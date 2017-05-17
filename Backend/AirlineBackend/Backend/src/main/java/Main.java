
import RandomData.FlightsCollector;
import RandomData.RandomFlights;
import entity.Airline;
import entity.Flight;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.logging.Level;
import java.util.logging.Logger;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Yousef Mohsen
 */
public class Main {
    public static void main(String[] args) {
        RandomFlights rf = new RandomFlights();
        
   FlightsCollector fc = new FlightsCollector();
   
   
   
        for (int i = 0; i < 10; i++) {
            System.out.println(rf.getDestination());
        }
  /*S 
   
Runnable task2 = () -> { while(true){ System.out.println("Task #2 is running"+Thread.activeCount()); }};


Thread t = new Thread(task2);
t.start();
        try {
            for (Airline al :   fc.fromAirlines("STN/2017-05-18T00:00:00.000Z/10")) {
                
               System.out.println(al.toString());
                
                
                
            }
        } catch (MalformedURLException ex) {
            Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
            System.out.println("Exception "+ex.getMessage());
        }
        t.stop();


*/

    }



}

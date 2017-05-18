
import Facades.BookingFacade;
import RandomData.FlightsCollector;
import RandomData.RandomFlights;
import entity.Airline;
import entity.Booking;
import entity.Flight;
import entity.Person;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

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
 BookingFacade bf = new BookingFacade();
 RandomFlights rf = new RandomFlights();
   
 
     
         Person nPerson = new Person("testName", "testPhone", "testEmail"); 
//     Booking nBooking = new Booking(nPerson,rf.getRandomFlight("BCN", "2017-05-18T00:00:00.000Z", 1));   //add flight later    
     bf.addNewBookingDemo(nPerson);//change return type to boolean, and modify it with the response status, so it returns error code if failed to persist
//     
     
        
//        
//       
//        
//   FlightsCollector fc = new FlightsCollector();
//   
//   
//   
//        for (int i = 0; i < 10; i++) {
//            System.out.println(rf.getDestination());
//        }
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

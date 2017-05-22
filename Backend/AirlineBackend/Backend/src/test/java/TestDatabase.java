/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import Facades.BookingFacade;
import entity.Person;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author Yousef Mohsen
 */
public class TestDatabase {
            BookingFacade bf = new BookingFacade();

    public TestDatabase() {
    }
    
    @BeforeClass
    public static void setUpClass() {
       
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    // @Test
    // public void hello() {}
    
    
    @Test
    public void testTest(){
    Person p  = new Person("testName1","testPhone1","testPassword1");
    bf.addNewBookingDemo(p);
    
    int newBookingID = p.getId();    
        System.out.println("ID IDID IDI DIDI DID DID ID ID ID ID "+newBookingID);
    Person personFromDatabase = bf.getPerson(601);
     System.out.println(p.getEmail()+" "+personFromDatabase.getEmail());
    assertTrue(p.getEmail().equals(personFromDatabase.getEmail()) && p.getFullName().equals(personFromDatabase.getFullName()) && p.getPhone().equals(personFromDatabase.getPhone()) );
    
    }
}

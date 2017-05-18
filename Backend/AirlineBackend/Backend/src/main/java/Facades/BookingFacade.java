/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Facades;

import entity.Booking;
import entity.Person;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author Yousef Mohsen
 */
public class BookingFacade {

    EntityManagerFactory emf;

    EntityManager em;

    public BookingFacade() {
        Persistence.generateSchema("pu", null);
        emf = Persistence.createEntityManagerFactory("pu");
        em = emf.createEntityManager();

    }
    
    
    
    
    public void addNewBooking(Booking b){
   try{ em.getTransaction().begin();
   em.persist(b);
    em.getTransaction().commit();}
   finally{em.close();}
    
    }

        
    public void addNewBookingDemo(Person b){
   try{ em.getTransaction().begin();
   em.persist(b);
    em.getTransaction().commit();}
   finally{em.close();}
    
    }

   
}

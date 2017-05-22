/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Facades;

import entity.Booking;
import entity.Person;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

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
    em.getTransaction().commit();
           System.out.println(b.getEmail());
}
   finally{}
    
    }
    
        public Person getBookDemo(){
        Query q = em.createQuery("SELECT p FROM Person p Where p.id");
        
           //  Query q = em.createQuery("SELECT p FROM PERSON ORDER BY p.id;");
                    List<Person> pList = q.getResultList();
                        for (Person person : pList) {
                            
                            System.out.println(person.getId()+": "+person.toString());
                
            }
 //List= (Person) q.getSingleResult();
     //   q.setParameter("id", 1);
        Person p = null;
        return p;
    }

        
        public Person getPerson(int id){
      
Query q = em.createQuery("SELECT p FROM Person p WHERE p.id = :id");
        q.setParameter("id", id);
        Person p = (Person) q.getSingleResult();
       
        return p;
    }
   
}

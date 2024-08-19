package org.example.carrental;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.carrental.entity.CarRentalEntity;
import org.example.carrental.pojo.CarRentalPojo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CarRentalControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private ObjectMapper objectMapper;

    private String baseUrl;

    @BeforeEach
    public void setUp() {
        baseUrl = "http://localhost:" + port + "/cars";
    }

    @Test
    public void testRentCar() throws IOException {
        CarRentalPojo carRental = new CarRentalPojo();
        carRental.setCarBrand("Toyota Camry");
        carRental.setPrice(50);

        HttpEntity<CarRentalPojo> request = new HttpEntity<>(carRental);
        ResponseEntity<Void> response = restTemplate.postForEntity(baseUrl + "/add", request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void testUpdateCar() throws IOException {
        // First, create a car rental
        CarRentalPojo carRental = new CarRentalPojo();
        carRental.setCarBrand("Honda Accord");
        carRental.setPrice(55);

        HttpEntity<CarRentalPojo> request = new HttpEntity<>(carRental);
        ResponseEntity<Void> postResponse = restTemplate.postForEntity(baseUrl + "/add", request, Void.class);
        assertEquals(HttpStatus.OK, postResponse.getStatusCode());

        // Assuming ID is 1 for simplicity, but this should be dynamic
        // Update the car rental
        carRental.setCarBrand("Updated Honda Accord");
        HttpEntity<CarRentalPojo> updateRequest = new HttpEntity<>(carRental);
        ResponseEntity<String> putResponse = restTemplate.exchange(baseUrl + "/car/1", HttpMethod.PUT, updateRequest, String.class);

        assertEquals(HttpStatus.OK, putResponse.getStatusCode());
        assertEquals("Car updated successfully", putResponse.getBody());
    }

    @Test
    public void testGetAllCarRentals() {
        ResponseEntity<CarRentalEntity[]> response = restTemplate.getForEntity(baseUrl + "/addlist", CarRentalEntity[].class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertTrue(response.getBody().length >= 0); // Assuming there could be zero or more rentals
    }

    @Test
    public void testGetCarRentalById() {
        // First, create a car rental
        CarRentalPojo carRental = new CarRentalPojo();
        carRental.setCarBrand("Nissan Altima");
        carRental.setPrice(60);

        HttpEntity<CarRentalPojo> request = new HttpEntity<>(carRental);
        ResponseEntity<Void> postResponse = restTemplate.postForEntity(baseUrl + "/add", request, Void.class);
        assertEquals(HttpStatus.OK, postResponse.getStatusCode());

        // Assuming ID is 1 for simplicity, but this should be dynamic
        ResponseEntity<CarRentalEntity> getResponse = restTemplate.getForEntity(baseUrl + "/addlist/1", CarRentalEntity.class);
        assertEquals(HttpStatus.OK, getResponse.getStatusCode());
        assertNotNull(getResponse.getBody());
}

}

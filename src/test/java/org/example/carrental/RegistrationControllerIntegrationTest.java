package org.example.carrental;

import org.example.carrental.entity.RegistrationEntity;
import org.example.carrental.pojo.RegistrationPojo;
import org.example.carrental.service.RegistrationService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class RegistrationControllerIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private RegistrationService registrationService;

    @Test
    public void testSaveRegistration() {
        RegistrationPojo registrationPojo = new RegistrationPojo();
        registrationPojo.setUsername("testUser");
        registrationPojo.setPassword("Test@1234");
        registrationPojo.setFull_name("Test User");
        registrationPojo.setEmail("testuser@gmail.com");
        registrationPojo.setContact_us("1234567890");

        ResponseEntity<String> response = restTemplate.postForEntity("/registration/save", registrationPojo, String.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("User registered successfully!", response.getBody());
    }

    @Test
    public void testGetAllRegistrations() {
        ResponseEntity<List> response = restTemplate.getForEntity("/registration/list", List.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
    }

    @Test
    public void testGetRegistrationById() {
        Optional<RegistrationEntity> entity = registrationService.getRegistrationsById(1);
        if (entity.isPresent()) {
            ResponseEntity<RegistrationEntity> response = restTemplate.getForEntity("/registration/list/1", RegistrationEntity.class);
            assertEquals(HttpStatus.OK, response.getStatusCode());
            assertNotNull(response.getBody());
        }
    }

    @Test
    public void testDeleteRegistration() {
        restTemplate.delete("/registration/list/1");
        Optional<RegistrationEntity> entity = registrationService.getRegistrationsById(1);
        assertEquals(Optional.empty(), entity);
}
}
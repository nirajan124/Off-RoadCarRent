package org.example.carrental.controller;

import lombok.RequiredArgsConstructor;
import org.example.carrental.entity.RegistrationEntity;
import org.example.carrental.pojo.RegistrationPojo;
import org.example.carrental.service.RegistrationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


import lombok.RequiredArgsConstructor;
import org.example.carrental.entity.RegistrationEntity;
import org.example.carrental.pojo.RegistrationPojo;
import org.example.carrental.service.RegistrationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/registration")
@RequiredArgsConstructor
public class RegistrationController {
    private final RegistrationService registrationService;

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody RegistrationPojo registrationPojo) {
        // Check if the user already exists
        if (registrationService.findUserByEmail(registrationPojo.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists");
        }

        // Validate email domain
        if (!registrationPojo.getEmail().endsWith("@gmail.com")) {
            return ResponseEntity.badRequest().body("Email must end with @gmail.com");
        }

        // Validate password
        String password = registrationPojo.getPassword();
        if (password.length() < 8 ||
                !password.matches(".*[A-Z].*") ||
                !password.matches(".*[a-z].*") ||
                !password.matches(".*[0-9].*") ||
                !password.matches(".*[!@#$%^&*()].*")) {
            return ResponseEntity.badRequest().body("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
        }

        // Save user data
        registrationService.saveData(registrationPojo);
        return ResponseEntity.ok("User registered successfully!");
    }

    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<String> handleIllegalArgumentException(IllegalArgumentException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }

    @GetMapping("/list")
    public ResponseEntity<List<RegistrationEntity>> getAllRegistrations() {
        List<RegistrationEntity> registrations = registrationService.getAllRegistrations();
        return ResponseEntity.ok(registrations);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<RegistrationEntity> getRegistrationById(@PathVariable Integer id) {
        Optional<RegistrationEntity> registration = registrationService.getRegistrationsById(id);
        if (registration.isPresent()) {
            return ResponseEntity.ok(registration.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @DeleteMapping("/list/{id}")
    public ResponseEntity<String> deleteRegistration(@PathVariable Integer id) {
        if (registrationService.getRegistrationsById(id).isPresent()) {
            registrationService.deleteRegistration(id);
            return ResponseEntity.ok("User deleted successfully!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }
}

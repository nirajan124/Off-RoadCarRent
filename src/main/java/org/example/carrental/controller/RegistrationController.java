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

@RestController
@RequestMapping("/registration")
@RequiredArgsConstructor
public class RegistrationController {
    private final RegistrationService registrationService;

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody RegistrationPojo registrationPojo) {
        if (registrationService.findUserByEmail(registrationPojo.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists");
        }

        if (!registrationPojo.getEmail().endsWith("@gmail.com")) {
            throw new IllegalArgumentException("Email must end with @gmail.com");
        }
        String password = registrationPojo.getPassword();
        if (password.length() < 8 ||
                !password.matches(".*[A-Z].*") ||
                !password.matches(".*[a-z].*") ||
                !password.matches(".*[0-9].*") ||
                !password.matches(".*[!@#$%^&*()].*")) {
            throw new IllegalArgumentException("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
        }
        this.registrationService.saveData(registrationPojo);
        return ResponseEntity.ok("User registered successfully!");
    }
    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<String> handleIllegalArgumentException(IllegalArgumentException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }

    @GetMapping("/list")
    public List<RegistrationEntity> getAllRegistrations() {
        return registrationService.getAllRegistrations();
    }

    @GetMapping("/list/{id}")
    public Optional<RegistrationEntity> getRegistrationById(@PathVariable Integer id) {
        return registrationService.getRegistrationsById(id);
    }

    @DeleteMapping("/list/{id}")
    public void deleteRegistration(@PathVariable Integer id) {
        registrationService.deleteRegistration(id);
    }

}



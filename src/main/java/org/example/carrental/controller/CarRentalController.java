package org.example.carrental.controller;

import lombok.RequiredArgsConstructor;
import org.example.carrental.entity.CarRentalEntity;
import org.example.carrental.pojo.CarRentalPojo;
import org.example.carrental.service.CarRentalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cars")
@RequiredArgsConstructor
public class CarRentalController {

    private final CarRentalService carRentalService;

    @PostMapping("/add")
    public ResponseEntity<?> addCar(
            @RequestParam("carBrand") String carBrand,
            @RequestParam("seat") int seat,
            @RequestParam("price") int price,
            @RequestParam(value = "carImage", required = false) MultipartFile carImage) {

        CarRentalPojo carRentalPojo = new CarRentalPojo();
        carRentalPojo.setCarBrand(carBrand);
        carRentalPojo.setSeat(seat);
        carRentalPojo.setPrice(price);

        if (carImage != null && !carImage.isEmpty()) {
            carRentalPojo.setCarImage(carImage);
        }

        try {
            carRentalService.saveCarRental(carRentalPojo);
            return ResponseEntity.ok("Car added successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving car");
        }
    }

    @PutMapping("/car/{id}")
    public ResponseEntity<?> updateCar(
            @PathVariable("id") Long id,
            @RequestParam("carBrand") String carBrand,
            @RequestParam("seat") int seat,
            @RequestParam("price") String price,
            @RequestParam(value = "carImage", required = false) MultipartFile carImage) {

        // Ensure validation here, if necessary
        if (carBrand.isEmpty() || seat <= 0 || price.isEmpty()) {
            return ResponseEntity.badRequest().body("Invalid input data");
        }

        // Your logic to update the car goes here
        return ResponseEntity.ok("Car updated successfully");
    }

    @GetMapping("/addlist")
    public List<CarRentalEntity> getAllCarRentals() {
        return carRentalService.getAllCarRentals();
    }

    @GetMapping("/addlist/{id}")
    public Optional<CarRentalEntity> getCarRentalById(@PathVariable Integer id) {
        return carRentalService.getCarRentalById(id);
    }

    @DeleteMapping("/addlist/{id}")
    public void deleteCarRental(@PathVariable Integer id) {
        carRentalService.deleteCarRental(id);
    }
}

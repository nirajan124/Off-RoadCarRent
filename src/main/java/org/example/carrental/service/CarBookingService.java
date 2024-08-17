package org.example.carrental.service;

import org.example.carrental.entity.CarBookingEntity;
import org.example.carrental.pojo.CarBookingPojo;

import java.util.List;
import java.util.Optional;

public interface CarBookingService {
    void saveCarBooking(CarBookingPojo carBookingPojo);
    List<CarBookingEntity> getAllCarBooking();
    Optional<CarBookingEntity> getCarBookingById(Integer id);
    void deleteCarBooking(Integer id);
}
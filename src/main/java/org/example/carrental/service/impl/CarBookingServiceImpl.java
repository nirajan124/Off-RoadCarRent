package org.example.carrental.service.impl;

import lombok.RequiredArgsConstructor;
import org.example.carrental.entity.CarBookingEntity;
import org.example.carrental.entity.CarRentalEntity;
import org.example.carrental.entity.RegistrationEntity;
import org.example.carrental.pojo.CarBookingPojo;
import org.example.carrental.repository.CarBookingRepository;
import org.example.carrental.repository.CarRentalRepository;
import org.example.carrental.repository.RegistrationRepository;
import org.example.carrental.service.CarBookingService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CarBookingServiceImpl implements CarBookingService {

    private final CarBookingRepository carBookingRepository;

    private final CarRentalRepository carRentalRepository;

    private final RegistrationRepository registrationRepository;



    @Override
    public void saveCarBooking(CarBookingPojo carBookingPojo) {
        CarBookingEntity carBookingEntity = new CarBookingEntity();
        CarRentalEntity carRentalEntity = carRentalRepository.findById(carBookingPojo.getCarId()).orElse(null);
        RegistrationEntity registrationEntity = registrationRepository.findById(carBookingPojo.getUserId()).orElse(null);
        carBookingEntity.setTotalAmount(carBookingPojo.getTotalAmount());

        if (carRentalEntity != null && registrationEntity != null) {
            carBookingEntity.setCar_Adding(carRentalEntity);
            carBookingEntity.setRegistration(registrationEntity);
        }
        carBookingEntity.setRentalStartdateTime(carBookingPojo.getRentalStartdateTime());
        carBookingEntity.setRentalEnddateTime(carBookingPojo.getRentalEnddateTime());


        carBookingRepository.save(carBookingEntity);
    }

    @Override
    public List<CarBookingEntity> getAllCarBooking() {

        return carBookingRepository.findAll();
    }

    @Override
    public Optional<CarBookingEntity> getCarBookingById(Integer id) {

        return carBookingRepository.findById(id);
    }

    @Override
    public void deleteCarBooking(Integer id) {

        carBookingRepository.deleteById(id);
    }

}



package org.example.carrental.repository;


import org.example.carrental.entity.CarBookingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarBookingRepository extends JpaRepository<CarBookingEntity, Integer> {

}


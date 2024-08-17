package org.example.carrental.repository;

import org.example.carrental.entity.CarRentalEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRentalRepository extends JpaRepository<CarRentalEntity,Integer>{
}
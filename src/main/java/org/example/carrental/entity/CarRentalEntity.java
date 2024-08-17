package org.example.carrental.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Car_Adding")
@Getter
@Setter
public class CarRentalEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "car_rental_seq_gen")
    @SequenceGenerator(name = "car_rental_seq_gen", sequenceName = "car_rental_seq", allocationSize = 1)
    private Integer id;

    @Column(name = "car_brand")
    private String carBrand;

    @Column(name = "Seat")
    private Integer seat;

    @Column(name = "Price")
    private Integer price;

    @Column(name = "carimage")
    private String carImage;

}


package org.example.carrental.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Entity
@Table(name = "Car Booking")
@Getter
@Setter
public class CarBookingEntity {
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "car_seq_gen")
    @SequenceGenerator(name = "car_seq_gen", sequenceName = "car_seq", allocationSize = 1)
    @Id
    private Integer id;

    @Column(name = "rental_start_date_time")
    private LocalDateTime rentalStartdateTime;


    @Column(name = "rental_end_date_time")
    private LocalDateTime rentalEnddateTime;

    @Column(name="total_amount")
    private Double totalAmount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "Car_Id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "foreign_key_car_details_id"))
    private CarRentalEntity car_Adding;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "User_Id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "foreign_key_user_details_id"))
    private RegistrationEntity registration;

}


package org.example.carrental.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CarBookingPojo {
    private Integer id;
    private Integer carId;
    private Integer userId;
    private LocalDateTime rentalStartdateTime;
    private LocalDateTime rentalEnddateTime;
    private Double totalAmount;
}


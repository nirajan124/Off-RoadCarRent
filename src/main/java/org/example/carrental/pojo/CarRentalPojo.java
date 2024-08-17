package org.example.carrental.pojo;


import lombok.*;
import org.springframework.web.multipart.MultipartFile;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class CarRentalPojo {
    private Integer id;
    private String carBrand;
    private Integer seat;
    private Integer price;
    private MultipartFile carImage;
}

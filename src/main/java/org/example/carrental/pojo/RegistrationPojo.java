package org.example.carrental.pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class RegistrationPojo {
    private Integer id;
    private String username;
    private String password;
    private String full_name;
    private String email;
    private String contact_us;
}

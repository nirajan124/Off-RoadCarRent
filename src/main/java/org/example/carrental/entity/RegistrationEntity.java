package org.example.carrental.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Registration")
@Setter
@Getter
public class RegistrationEntity {
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "parameter_setup_seq_gen")

    @SequenceGenerator(name = "parameter_setup_seq_gen", sequenceName = "parameters_setup_seq", allocationSize = 1)

    @Id
    private Integer id;

    @Column(name="Username")
    private String username;

    @Column(name="Password")
    private String password;

    @Column(name="FullName")
    private String full_name;

    @Column(name="Email")
    private String email;

    @Column(name="Contact Us")
    private String contact_us;

}


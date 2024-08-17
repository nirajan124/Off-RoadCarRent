package org.example.carrental.service;

import org.example.carrental.entity.RegistrationEntity;
import org.example.carrental.pojo.RegistrationPojo;

import java.util.List;
import java.util.Optional;

public interface RegistrationService {
    void saveData(RegistrationPojo registrationPojo);
    RegistrationPojo findUserByEmail(String email);
    boolean authenticateUser(String email, String password);
    List<RegistrationEntity> getAllRegistrations();
    Optional<RegistrationEntity> getRegistrationsById(Integer id);
    void deleteRegistration(Integer id);
}

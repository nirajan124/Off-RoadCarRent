package org.example.carrental.service.impl;

import lombok.RequiredArgsConstructor;
import org.example.carrental.entity.RegistrationEntity;
import org.example.carrental.pojo.RegistrationPojo;
import org.example.carrental.repository.RegistrationRepository;
import org.example.carrental.service.RegistrationService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RegistrationServiceImpl implements RegistrationService {
    @Autowired
    private RegistrationRepository registrationRepository;

    @Override
    public void saveData(RegistrationPojo registrationPojo) {
        RegistrationEntity registration = new RegistrationEntity();
        registration.setId(registrationPojo.getId());
        registration.setUsername(registrationPojo.getUsername());
        registration.setPassword(registrationPojo.getPassword());
        registration.setFull_name(registrationPojo.getFull_name());
        registration.setEmail(registrationPojo.getEmail());
        registration.setContact_us(registrationPojo.getContact_us());
        registrationRepository.save(registration);
    }
    @Override
    public RegistrationPojo findUserByEmail(String email) {
        RegistrationEntity entity = registrationRepository.findByEmail(email);
        if (entity != null) {
            RegistrationPojo pojo = new RegistrationPojo();
            BeanUtils.copyProperties(entity, pojo);
            return pojo;
        }
        return null;
    }

    @Override
    public boolean authenticateUser(String email, String password) {
        RegistrationEntity user = registrationRepository.findByEmail(email);
        return user != null && user.getPassword().equals(password);
    }

    @Override
    public List<RegistrationEntity> getAllRegistrations() {
        return registrationRepository.findAll();
    }

    @Override
    public Optional<RegistrationEntity> getRegistrationsById(Integer id) {
        return registrationRepository.findById(id);
    }

    @Override
    public void deleteRegistration(Integer id) {
        registrationRepository.deleteById(id);
    }
}

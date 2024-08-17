package org.example.carrental.service.impl;


import lombok.RequiredArgsConstructor;
import org.example.carrental.entity.RegistrationEntity;
import org.example.carrental.repository.LoginRepository;
import org.example.carrental.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public boolean authenticateUser(String email, String password) {
        RegistrationEntity user = loginRepository.findByEmail(email);
        return user != null && user.getPassword().equals(password);
    }
}


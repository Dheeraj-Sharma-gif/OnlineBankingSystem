package com.example.bank.service;

import com.example.bank.model.User;
import com.example.bank.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    public String register(User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            return "Username already taken.";
        }
        userRepository.save(user);
        return "User registered successfully.";
    }

    public String login(User user) {
        return userRepository.findByUsername(user.getUsername())
                .map(u -> u.getPassword().equals(user.getPassword()) ? "Login successful." : "Invalid credentials.")
                .orElse("User not found.");
    }
}

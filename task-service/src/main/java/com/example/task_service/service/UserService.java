package com.example.task_service.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.task_service.model.User;
import com.example.task_service.repository.UserRepository;


@Service
public class UserService {


    private final UserRepository repository;


    public UserService(UserRepository repository) {
        this.repository = repository;
    }


    public User saveUser(User user) {

        return repository.save(user);

    }


    public List<User> getUsers(){

        return repository.findAll();

    }

}
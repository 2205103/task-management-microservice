package com.example.task_service.controller;


import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.task_service.model.User;
import com.example.task_service.service.UserService;



@RestController
public class UserController {


    private final UserService service;


    public UserController(UserService service) {
        this.service = service;
    }



    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        return service.saveUser(user);

    }



    @GetMapping("/users")
    public List<User> getUsers(){

        return service.getUsers();

    }

}
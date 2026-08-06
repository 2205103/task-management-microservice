package com.example.task_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.task_service.model.User;


public interface UserRepository extends JpaRepository<User, Integer> {

}
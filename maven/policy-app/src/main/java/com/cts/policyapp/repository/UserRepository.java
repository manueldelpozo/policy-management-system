package com.cts.policyapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.policyapp.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

}

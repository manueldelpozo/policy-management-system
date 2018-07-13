package com.cts.policyapp.service;

//import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.policyapp.model.User;
import com.cts.policyapp.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;
	
	
	public Optional<User> findUserById(String id) {
		return repository.findById(id);
	}
	
	//public Optional addUser(User user) {
		//return repository.save(user);
	//}

}

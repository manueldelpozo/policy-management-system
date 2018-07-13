package com.cts.policyapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.policyapp.model.User;
import com.cts.policyapp.model.UserPolicy;
import com.cts.policyapp.model.Policy;
import com.cts.policyapp.service.PolicyService;
import com.cts.policyapp.service.UserService;

@RestController
public class PolicyManagementController {
	
	@Autowired
	UserService userService;
	@Autowired
	PolicyService policyService;
	
	@RequestMapping(value="/user/login", method=RequestMethod.POST, produces="application/json")
	public User getUser(@RequestBody User user) throws Exception {
		Optional<User> loggedUser = userService.findUserById(user.getId());
		if(loggedUser.isPresent()) {
			return loggedUser.get();
		} else {
			throw new Exception("Invalid");
		}
	}
	
	@RequestMapping(value="/policy/all", method=RequestMethod.GET, produces="application/json")
	public List<Policy> getAllPolicies() {
		List<Policy> list = policyService.findAllPolicies();
		return list;
	}
	
	//@RequestMapping(value="/user/register", method=RequestMethod.POST)
	//public User putUser(User user) {
		//return userService.addUser(user);
	//}
	
	@RequestMapping(value="/policy/user", method=RequestMethod.POST, produces="application/json")
	public List<UserPolicy> getUserPolicies(@RequestBody String id) {
		List<UserPolicy> list = policyService.findPoliciesByUserId(id);
		return list;
	}
}

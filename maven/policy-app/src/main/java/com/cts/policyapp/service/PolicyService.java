package com.cts.policyapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.policyapp.model.Policy;
import com.cts.policyapp.model.UserPolicy;
import com.cts.policyapp.repository.PolicyRepository;
import com.cts.policyapp.repository.UserPolicyRepository;

@Service
public class PolicyService {
	@Autowired
	private PolicyRepository repository;
	@Autowired
	private UserPolicyRepository upRepository;
	
	public List<Policy> findAllPolicies() {
		return repository.findAll();
	}
	
	public List<UserPolicy> findPoliciesByUserId(String id) {
		return upRepository.find(id);
	}
}

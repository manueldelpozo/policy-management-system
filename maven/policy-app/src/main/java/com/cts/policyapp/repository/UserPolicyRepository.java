package com.cts.policyapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cts.policyapp.model.Policy;
import com.cts.policyapp.model.UserPolicy;

@Repository
public interface UserPolicyRepository extends JpaRepository<Policy, String> {
	
	@Query("SELECT up FROM UserPolicy up WHERE up.user.id = :id ")
	public List<UserPolicy> find(@Param(value="id") String id);
	
	//@Query("SELECT p.id, p.name, p.details, up.amount, up.endDate FROM user_policy up INNER JOIN policy p WHERE up.id_user = :id ")
	//public List<Policy> find(@Param("id") String id);
}

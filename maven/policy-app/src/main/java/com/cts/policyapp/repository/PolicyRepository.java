package com.cts.policyapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.policyapp.model.Policy;

@Repository
public interface PolicyRepository extends JpaRepository<Policy, String> {

}

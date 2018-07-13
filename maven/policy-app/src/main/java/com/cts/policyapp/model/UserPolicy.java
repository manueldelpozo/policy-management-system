package com.cts.policyapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="user_policy")
public class UserPolicy {
	
	@Id
	@Column(name="id")
	@JsonProperty("id")
	private int id;
	
	@ManyToOne
	@JoinColumn(name="id_user", referencedColumnName="id", nullable=false)
	private User user;
	
	@ManyToOne
	@JoinColumn(name="id_policy", referencedColumnName="id", nullable=false)
	private Policy policy;
	
	@Column(name="amount")
	@JsonProperty("amount")
	private int amount;
	
	@Column(name="endDate")
	@JsonProperty("endDate")
	private String endDate;

	public int getId() {
		return id;
	}

	public User getUser() {
		return user;
	}

	public Policy getPolicy() {
		return policy;
	}

	public int getAmount() {
		return amount;
	}

	public String getEndDate() {
		return endDate;
	}
	
}

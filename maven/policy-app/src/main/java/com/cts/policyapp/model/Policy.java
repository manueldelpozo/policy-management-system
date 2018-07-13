package com.cts.policyapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="policy")
public class Policy {
	
	@Id
	@Column(name="id")
	@JsonProperty("id")
	private int id;
	
	@Column(name="name")
	@JsonProperty("name")
	private String name;
	
	@Column(name="details")
	@JsonProperty("details")
	private String details;
	
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getDetails() {
		return details;
	}

}

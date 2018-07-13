package com.cts.policyapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="user")
public class User {
	
	@Id
	@Column(name="id")
	@JsonProperty("id")
	private String id;
	
	@Column(name="firstName")
	@JsonProperty("firstName")
	private String firstName;
	
	@Column(name="lastName")
	@JsonProperty("lastName")
	private String lastName;
	
	@Column(name="dateOfBirth")
	@JsonProperty("dateOfBirth")
	private String dateOfBirth;
	
	@Column(name="address")
	@JsonProperty("address")
	private String address;
	
	@Column(name="contactNumber")
	@JsonProperty("contactNumber")
	private String contactNumber;
	
	@Column(name="email")
	@JsonProperty("email")
	private String email;
	
	@Column(name="password")
	@JsonProperty("password")
	private String password;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
		
}

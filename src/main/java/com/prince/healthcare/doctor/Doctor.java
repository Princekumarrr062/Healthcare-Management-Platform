package com.prince.healthcare.doctor;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name="doctors")
public class Doctor {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    @NotBlank private String name;
    @NotBlank private String specialization;
    private String phone;
    private String email;
    public Doctor(){}
    public Long getId(){return id;}
    public String getName(){return name;} public void setName(String v){name=v;}
    public String getSpecialization(){return specialization;} public void setSpecialization(String v){specialization=v;}
    public String getPhone(){return phone;} public void setPhone(String v){phone=v;}
    public String getEmail(){return email;} public void setEmail(String v){email=v;}
}

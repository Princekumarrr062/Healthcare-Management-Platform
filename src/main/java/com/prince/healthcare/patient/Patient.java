package com.prince.healthcare.patient;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name="patients")
public class Patient {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @NotBlank private String name;
    @Min(0) @Max(120) private int age;
    @NotBlank private String gender;
    @NotBlank private String phone;
    private String email;
    private String bloodGroup;

    public Patient() {}
    public Patient(String name, int age, String gender, String phone, String email, String bloodGroup) {
        this.name=name; this.age=age; this.gender=gender; this.phone=phone;
        this.email=email; this.bloodGroup=bloodGroup;
    }
    public Long getId(){return id;}
    public String getName(){return name;}
    public void setName(String v){name=v;}
    public int getAge(){return age;}
    public void setAge(int v){age=v;}
    public String getGender(){return gender;}
    public void setGender(String v){gender=v;}
    public String getPhone(){return phone;}
    public void setPhone(String v){phone=v;}
    public String getEmail(){return email;}
    public void setEmail(String v){email=v;}
    public String getBloodGroup(){return bloodGroup;}
    public void setBloodGroup(String v){bloodGroup=v;}
}

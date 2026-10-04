package com.prince.healthcare.appointment;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity @Table(name="appointments")
public class Appointment {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
 private Long patientId;
 private Long doctorId;
 private LocalDateTime appointmentTime;
 private String status;
 private String reason;
 public Appointment(){}
 public Long getId(){return id;}
 public Long getPatientId(){return patientId;} public void setPatientId(Long v){patientId=v;}
 public Long getDoctorId(){return doctorId;} public void setDoctorId(Long v){doctorId=v;}
 public LocalDateTime getAppointmentTime(){return appointmentTime;} public void setAppointmentTime(LocalDateTime v){appointmentTime=v;}
 public String getStatus(){return status;} public void setStatus(String v){status=v;}
 public String getReason(){return reason;} public void setReason(String v){reason=v;}
}

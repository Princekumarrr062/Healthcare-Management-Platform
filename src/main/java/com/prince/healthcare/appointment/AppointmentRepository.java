package com.prince.healthcare.appointment;
import org.springframework.data.jpa.repository.JpaRepository;
public interface AppointmentRepository extends JpaRepository<Appointment,Long>{}

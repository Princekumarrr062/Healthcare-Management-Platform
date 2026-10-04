# Healthcare Management Platform

A web-based Healthcare Management Platform developed using Java, Spring Boot, Spring Data JPA, H2 Database, HTML, CSS, and JavaScript.

## Features

- Patient Management
  - Add patients
  - View patients
  - Delete patients

- Doctor Management
  - Add doctors
  - View doctors
  - Delete doctors

- Appointment Management
  - Create appointments
  - View appointments
  - Delete appointments
  - Manage appointment status

- Dashboard
  - Total patients
  - Total doctors
  - Total appointments

## Technologies Used

- Java 24
- Spring Boot 3.5.6
- Spring Data JPA
- Spring Web
- Spring Validation
- H2 Database
- HTML5
- CSS3
- JavaScript
- Maven
- Git & GitHub

## Project Structure

```text
Healthcare-Management-Platform
│
├── src
│   └── main
│       ├── java
│       │   └── com.prince.healthcare
│       │       ├── appointment
│       │       ├── doctor
│       │       ├── patient
│       │       └── HealthcareApplication.java
│       │
│       └── resources
│           ├── static
│           │   ├── index.html
│           │   ├── app.js
│           │   └── style.css
│           └── application.properties
│
├── pom.xml
├── README.md
└── .gitignore

# Healthcare Management Platform for Clinical Operations

A Spring Boot starter project for clinical operations management.

## Technology
- Java 17
- Spring Boot
- Spring Data JPA
- H2 Database
- HTML/CSS/JavaScript
- Maven

## Current modules
1. Patient management: create, list, delete, update API
2. Doctor management
3. Appointment management
4. Clinical operations dashboard
5. H2 database for local development

## Run
Open the project in IntelliJ IDEA and run `HealthcareApplication.java`.

Or from terminal:
`mvn spring-boot:run`

Open:
`http://localhost:8080`

H2 console:
`http://localhost:8080/h2-console`
JDBC URL: `jdbc:h2:file:./data/healthcaredb`
User: `sa`
Password: empty

## API
- GET/POST `/api/patients`
- GET/PUT/DELETE `/api/patients/{id}`
- GET/POST `/api/doctors`
- DELETE `/api/doctors/{id}`
- GET/POST `/api/appointments`
- PATCH `/api/appointments/{id}/status?value=COMPLETED`

## Important
This is a project starter based on the project title you provided, not an official Infosys confidential specification. Match it against any official requirements you later receive.

package com.prince.healthcare.patient;

import jakarta.validation.Valid;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins="*")
public class PatientController {
    private final PatientRepository repo;
    public PatientController(PatientRepository repo){this.repo=repo;}

    @GetMapping public List<Patient> all(){ return repo.findAll(); }

    @GetMapping("/{id}")
    public ResponseEntity<Patient> one(@PathVariable Long id){
        return repo.findById(id).map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Patient> create(@Valid @RequestBody Patient p){
        return ResponseEntity.status(HttpStatus.CREATED).body(repo.save(p));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Patient> update(@PathVariable Long id, @Valid @RequestBody Patient p){
        return repo.findById(id).map(existing -> {
            existing.setName(p.getName()); existing.setAge(p.getAge());
            existing.setGender(p.getGender()); existing.setPhone(p.getPhone());
            existing.setEmail(p.getEmail()); existing.setBloodGroup(p.getBloodGroup());
            return ResponseEntity.ok(repo.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        if(!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id); return ResponseEntity.noContent().build();
    }
}

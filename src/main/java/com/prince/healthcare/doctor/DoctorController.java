package com.prince.healthcare.doctor;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController @RequestMapping("/api/doctors") @CrossOrigin(origins="*")
public class DoctorController {
 private final DoctorRepository repo;
 public DoctorController(DoctorRepository repo){this.repo=repo;}
 @GetMapping public List<Doctor> all(){return repo.findAll();}
 @PostMapping public Doctor create(@Valid @RequestBody Doctor d){return repo.save(d);}
 @DeleteMapping("/{id}") public void delete(@PathVariable Long id){repo.deleteById(id);}
}

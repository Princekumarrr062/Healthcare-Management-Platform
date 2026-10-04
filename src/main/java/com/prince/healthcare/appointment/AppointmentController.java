package com.prince.healthcare.appointment;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController @RequestMapping("/api/appointments") @CrossOrigin(origins="*")
public class AppointmentController {
 private final AppointmentRepository repo;
 public AppointmentController(AppointmentRepository repo){this.repo=repo;}
 @GetMapping public List<Appointment> all(){return repo.findAll();}
 @PostMapping public Appointment create(@RequestBody Appointment a){return repo.save(a);}
 @PatchMapping("/{id}/status") public Appointment status(@PathVariable Long id,@RequestParam String value){
   Appointment a=repo.findById(id).orElseThrow(); a.setStatus(value); return repo.save(a);
 }
 @DeleteMapping("/{id}") public void delete(@PathVariable Long id){repo.deleteById(id);}
}

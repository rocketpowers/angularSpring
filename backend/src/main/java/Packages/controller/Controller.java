package Packages.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Packages.model.Client;
import Packages.repository.ClientRepository;

@RestController
@CrossOrigin(originPatterns = "*")
public class Controller {

	@Autowired
	private ClientRepository repository;
	
	@PostMapping("/register")
	public Client register(@RequestBody Client savClient) {
		
		System.out.println("user save sucessfull");
		
		//JOptionPane.showMessageDialog(null, "user save sucessfull");
		
		
		return repository.save(savClient) ;
		
	}

	@GetMapping("/list")
	public Iterable<Client> list() {
		return repository.findAll();

	}
	
	@PutMapping("/edit")
	public Client edit(@RequestBody Client editClient) {
		return repository.save(editClient);
	}
	
	@DeleteMapping("/{id}")
	public void del(@PathVariable long id) {
		repository.deleteById(id);
		System.out.println("user removed sucessfull");
		//JOptionPane.showInputDialog("user removed sucessfull");
	}
	
	

	
}

package Packages.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Packages.model.Client;

public interface Repository  extends JpaRepository<Client, Long>{
	
	

}

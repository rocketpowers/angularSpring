package Packages.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Packages.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {

}

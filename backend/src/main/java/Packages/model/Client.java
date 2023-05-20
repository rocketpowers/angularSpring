package Packages.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
public class Client {

	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private long id;

	private String name;
	private int age;
	private String city;

}

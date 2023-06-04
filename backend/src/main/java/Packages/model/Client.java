package Packages.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name="tb_client")
public class Client {

	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private long id;

	private String Name;
	private int Age;
	private String City;

}

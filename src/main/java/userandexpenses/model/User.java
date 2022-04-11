package userandexpenses.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity

public class User
{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(nullable = false)
	private String username;
	
	@Column(nullable = false)
	private String email;
	
	@Column(nullable = false)
	private String password;
	


	private double mainbalance;
	
	
	
	
	public User() {
	}
	

	

	public User(long id, String username, String email, String password, double mainbalance, Set<Expense> expense) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.mainbalance = mainbalance;
		this.expense = expense;
		
	}








	@JsonIgnore
	@OneToMany(mappedBy = "user")
	private Set<Expense> expense =new HashSet<Expense>();
	
	




	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public double getMainbalance() {
		return mainbalance;
	}


	public void setMainbalance(double mainbalance) {
		this.mainbalance = mainbalance;
	}



	public Set<Expense> getExpense() {
		return expense;
	}


	public void setExpense(Set<Expense> expense) {
		this.expense = expense;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}

}

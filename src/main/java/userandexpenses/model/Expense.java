package userandexpenses.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "expenseandincome")
public class Expense 
{
	


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String category;
	
	private double amount;
	
	
	
	
	
	@ManyToOne(cascade = CascadeType.REMOVE)
	@JoinColumn(name = "user_id",referencedColumnName = "id")
	private User user;
	

	public Expense() {
		
	}


	public Expense(long id, String category, double amount, User user) {
		this.id = id;
		this.category = category;
		this.amount = amount;
		this.user = user;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public double getAmount() {
		return amount;
	}


	public void setAmount(double amount) {
		this.amount = amount;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	
}

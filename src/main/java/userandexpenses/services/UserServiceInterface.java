package userandexpenses.services;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import userandexpenses.model.Expense;
import userandexpenses.model.User;

public interface UserServiceInterface 
{
	
	
	//Insert User
	ResponseEntity<String> addUser(User obj);
	
	//Insert Expense
	void addExpense(Expense obj);
	
	
	
	//Update User
	User updateUser(long id,User obj) throws Exception;
	
	//Update Expense
	Expense updateExpense(long id,Expense obj) throws Exception;
	
	//Delete Expense
	void deleteExpense(long id);
	void deleteAllExpenses();
	
	
	//Delete User
	boolean deleteUser(long id) throws Exception;
	
	
	
	
	
	
	//Display Users
	User displayUser(long id) throws Exception;
	
	//Display User  by Email
	User displayByEmail(String emailid) throws Exception;
	
	List<User> displayAllUsers();
	
	//Display Expense
	Expense displayExpense(long id) throws Exception;
	
	List<Expense> displayAllExpenses();
	
	//Display Expenses For User
	List<Expense> displayUserExpenses(long id) throws Exception;
	
	//=======ROLE METHODS=======

//	Collection<Role> findAll();
//
//	Optional<Role> findById(Long id);
//
//	Role findByName(String name);
//
//	Role saveOrUpdate(Role role);
//
//	boolean deleteById(Long id);
//	
	
}

package userandexpenses.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import userandexpenses.config.JwtUtil;
import userandexpenses.model.AuthRequest;
import userandexpenses.model.Expense;
import userandexpenses.model.User;
import userandexpenses.services.UserServiceInterface;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class UserAndExpenseController
{
	@Autowired
	UserServiceInterface servicerefence;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private AuthenticationManager authenticationManager;


	

	
	@GetMapping("/displayuser/{id}")
	public User displayUser(@PathVariable long id) throws Exception
	{
		return servicerefence.displayUser(id);
	}
	@GetMapping("/displayemail/{email}")
	public User displayUserbyEmail(@PathVariable String email) throws Exception
	{
		return servicerefence.displayByEmail(email);
	}
	
	@GetMapping("/displayallexpenses")
	public List<Expense> displayExpenses()
	{
		return servicerefence.displayAllExpenses();
	}
	
	@GetMapping("/displayuserexpense/{id}")
	public List<Expense> displayUserExpenses(@PathVariable long id) throws Exception
	{
		return servicerefence.displayUserExpenses(id);
	}
	
	@PostMapping("/adduser")
	public ResponseEntity<String> addUser(@RequestBody User obj)
	{
		
		return servicerefence.addUser(obj);
	}
	
	@PostMapping("/addexpense")
	public void addExpense(@RequestBody Expense obj)
	{
		servicerefence.addExpense(obj);
	}
	
	@PutMapping("/updateuser/{id}")
	public User updateUser(@PathVariable long id,@RequestBody User obj) throws Exception
	{
		return servicerefence.updateUser(id, obj);
	}
	
	@PutMapping("/updateexpense/{id}")
	public Expense updateExpense(@PathVariable long id,@RequestBody Expense obj) throws Exception
	{
		return servicerefence.updateExpense(id, obj);
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public boolean deleteUser(@PathVariable long id) throws Exception
	{
		return servicerefence.deleteUser(id);
	}
	
	@DeleteMapping("/deleteexpense/{id}")
	public void deleteExpense(@PathVariable long id)
	{
		servicerefence.deleteExpense(id);
	}
	
	@DeleteMapping("/clearall")
	public void clearAll()
	{
		servicerefence.deleteAllExpenses();
	}
	
	
	


	@PostMapping(value = "/authenticate")
	public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
		} catch (AuthenticationException e) {
			// TODO Auto-generated catch block
			throw new Exception("Invalid Credentials");
		}
		
		return jwtUtil.generateToken(authRequest.getUsername());
		
		
	}
	
	
}

package userandexpenses.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import userandexpenses.dao.ExpenseRepository;
import userandexpenses.dao.UserRepository;
import userandexpenses.model.Expense;
import userandexpenses.model.User;



@Service
public class UserService implements UserServiceInterface,UserDetailsService
{
	@Autowired
	private UserRepository urepo;
	
	@Autowired
	private ExpenseRepository erepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	
	//-------------------USER IMPLEMENTATION----------------------

	@Override
	public ResponseEntity<String> addUser(User obj) {
		// TODO Auto-generated method stub
		JSONObject jsobj = new JSONObject();
		try {
			obj.setPassword(passwordEncoder.encode(obj.getPassword()));
			User savedUser= urepo.saveAndFlush(obj);
			jsobj.put("message", savedUser.getUsername()+" Saved Successfully");
			return new ResponseEntity<>(jsobj.toString(), HttpStatus.OK);
	
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return new ResponseEntity<String>(jsobj.toString(), HttpStatus.UNAUTHORIZED);
	}


	@Override
	public User updateUser(long id, User obj) throws Exception {
		// TODO Auto-generated method stub
		User updateuser = urepo.findById(id).orElseThrow(()-> new Exception("Not a Valid ID Exception"));
		updateuser.setId(id);
		if(obj.getEmail()!=null)
			updateuser.setEmail(obj.getEmail());
		if(obj.getExpense()!=null)
			updateuser.setExpense(obj.getExpense());
		updateuser.setMainbalance(obj.getMainbalance());
		if(obj.getUsername()!=null)
			updateuser.setUsername(obj.getUsername());
		urepo.save(updateuser);
		return updateuser;
	}
	
	@Override
	public boolean deleteUser(long id) throws Exception {
		boolean deleted = false;
		Optional<User> x = urepo.findById(id);
		User tempuser = new User();
		if(x.isPresent())
		{
			tempuser = x.get();
			urepo.delete(tempuser);
			deleted = true;
		}
		
		
		return deleted;
		
		
	}

	@Override
	public User displayUser(long id) throws Exception {
		// TODO Auto-generated method stub
		User x = urepo.findById(id).orElseThrow(()->new Exception("Invalid"));
		return x;
	}

	@Override
	public List<User> displayAllUsers() {
		// TODO Auto-generated method stub
		List<User> us= urepo.findAll();
		return us;
	}
	
	@Override
	public User displayByEmail(String email) throws Exception {
		// TODO Auto-generated method stub
		User x = urepo.findByEmail(email);
		return x;
	}

	@Override
	public List<Expense> displayUserExpenses(long id) throws Exception {
	
			User u = urepo.findById(id).orElseThrow(()-> new Exception("Invalid"));
			long z = u.getId();
			List<Expense> x  = erepo.findByUser_id(z);
		
		
		return x;
	}

	
	//-------------------EXPENSE IMPLEMENTATION----------------------

	
	@Override
	public void addExpense(Expense obj) {
		// TODO Auto-generated method stub
		erepo.save(obj);
		
	}

	@Override
	public Expense updateExpense(long id, Expense obj) throws Exception {
		// TODO Auto-generated method stub
		Expense exp = erepo.findById(id).orElseThrow(()->new Exception("Not a Valid ID Exception"));
		exp.setId(id);
		if(obj.getCategory()!=null)
			exp.setCategory(obj.getCategory());
		exp.setAmount(obj.getAmount());
		if(obj.getUser()!=null)
			exp.setUser(obj.getUser());
		erepo.save(exp);
		return exp;
	}

	@Override
	public void deleteExpense(long id) {
		// TODO Auto-generated method stub
		erepo.deleteById(id);
		
	}


	@Override
	public Expense displayExpense(long id) throws Exception {
		// TODO Auto-generated method stub
		Expense ex=  erepo.findById(id).orElseThrow(()->new Exception("Invalid"));
		return ex;
	}

	@Override
	public List<Expense> displayAllExpenses() {
		// TODO Auto-generated method stub
		List<Expense> exp = erepo.findAll();
		return exp;
	}

	@Override
	public void deleteAllExpenses()
	{
		// TODO Auto-generated method stub
		erepo.deleteAll();
		
	}

	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		User user = urepo.findByUsername(username);
		if(user ==null){
			throw new UsernameNotFoundException("User Not Found with Username : "+username);	
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),new ArrayList<>());
	}
		
	
	
	
	//---------------------ROLES IMPLEMENTATION-------------------------

//	@Override
//	public Collection<Role> findAll() {
//		return roleRepository.findAll();
//	}
//
//	@Override
//	public Optional<Role> findById(Long id) {
//		return roleRepository.findById(id);
//	}
//	
//	@Override
//	public Role findByName(String name) {
//		return roleRepository.findByName(name);
//	}
//
//	@Override
//	public Role saveOrUpdate(Role role) {
//		return roleRepository.saveAndFlush(role);
//	}
//
//	@Override
//	public boolean deleteById(Long id) {
//		boolean deleted = false;
//		JSONObject jsonObject = new JSONObject();
//		try {
//			roleRepository.deleteById(id);
//			deleted = true;
//			jsonObject.put("message", "Role deleted successfully");
//			
//		} catch (JSONException e) {
//			e.printStackTrace();
//		}
//		return deleted;
//	}



}

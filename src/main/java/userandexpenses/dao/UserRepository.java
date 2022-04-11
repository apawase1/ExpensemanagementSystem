package userandexpenses.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import userandexpenses.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>
{
	public User findByEmail(String email);
	
	public User findByUsername(String userName);
	
	
	
	
}

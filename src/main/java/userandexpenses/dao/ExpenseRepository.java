package userandexpenses.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import userandexpenses.model.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long>
{
	public List<Expense> findByUser_id(long id);
}

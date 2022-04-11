import axios from 'axios';
import { Component } from 'react';


const user_expense_base_url = "http://localhost:7777/api";
// "/api/displayuser/*


class UserExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("jwtToken")
    }
    this.generateToken = this.generateToken.bind(this); 
    
  }
    getAllUserExpenses (id){
        
        return axios.get(user_expense_base_url+'/displayuserexpense/'+id,{
            headers: {
              'Authorization': `Bearer ${this.state.token}`
            },});
    }
    getUserById(id){
       // alert("Api called")
        return axios.get(user_expense_base_url+'/displayuser/'+id,//{
            // headers: {
            //   Authorization: `Bearer ${this.state.token}`
            // },}
            );
    }

    // getUserByEmail(email) {
    //     return axios.get(user_expense_base_url+'/displayemail/'+email);
    // }

    createUser(user) {
        return axios.post(user_expense_base_url+'/adduser',user);
    }
    //update user details(balance,name,password,username)
    updateUser(id,user) {
        return axios.put(user_expense_base_url+'/updateuser/'+id,user,{
            headers: {
              'Authorization': `Bearer ${this.state.token}`
            },});
    }
    //update expense(category,price)
    updateExpense(id,expense) {
        return axios.put(user_expense_base_url+'/updateexpense/'+id,expense);
    }
    //delete expense
    deleteExpense(id) {
        return axios.delete(user_expense_base_url+'/deleteuser/'+id,{
            headers: {
              'Authorization': `Bearer ${this.state.token}`
            },});
    }

    generateToken(credentials){

      
      return axios.post(user_expense_base_url+'/authenticate',credentials);
        
    }


}
export default new UserExpense();
import React, { Component } from "react";
import UserExpense from '../service/api';


class SignUp extends Component {
    constructor(props) {
        super(props);
       
        console.log(props);
         this.state = { 
                     username: '',
                     email: '',
                     mainbalance: 0,
                     password :'',
                     confirm_password:'',
                     submitDisabled:true,
                     emailValid:false,
                     userNameValid: true,
                     passwordValid:false,
                     confirmPasswordValid:false,
                     errors:{}
                    
                }

                
        this.saveUser = this.saveUser.bind(this);
        this.changeUsernameHandler=this.changeUsernameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeMainbalanceHandler=this.changeMainbalanceHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        
  
        
    }

    
    saveUser = (e)=>{ 
        
        
       
        e.preventDefault();
        let user = {username:this.state.email,email:this.state.email,mainbalance:this.state.mainbalance,password:this.state.password};
        console.log('user=>'+JSON.stringify(user)); 
         
    
        
            if (this.state.password !== this.state.confirm_password) {
                alert("","Password Mismatched");
                // window.location="/";
               
           
            }else {
                // alert('data changed')
                UserExpense.createUser(user);
                
               window.location="/";
           
     
               
                
                
                
                
            }
   

    }
    changeUsernameHandler=(event)=>{
        let userNameValid =  true ;
        let submitValid = userNameValid && this.emailValid && this.state.passwordValid && this.state.confirmPasswordValid
        this.setState({username: event.target.value,userNameValid:userNameValid,submitDisabled: !submitValid});
        
        
    }
    changeEmailHandler=(event)=>{
        let emailValid = event.target.value ? true : false; 
        let submitValid = this.state.userNameValid && emailValid && this.state.passwordValid && this.state.confirmPasswordValid
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
        this.setState({email: event.target.value,emailValid: emailValid,submitDisabled: !submitValid});
        if(!regex.test(this.state.email)){
        
            this.state.errors.email = "This is not a valid email format!";
        }else{
            this.state.errors.email = "";
        }

        
        
    }
    changeMainbalanceHandler=(event)=>{
        this.setState({mainbalance: event.target.value});
    }
    changePasswordHandler=(event)=>{
        let passwordValid = event.target.value ? true : false; 
        let submitValid = this.state.userNameValid && this.state.emailValid && this.state.confirmPasswordValid && passwordValid 
        this.setState({password:event.target.value,passwordValid:passwordValid,submitDisabled: !submitValid});
    }
    changeConfirmPasswordHandler=(event)=>{
        let confirmPasswordValid = event.target.value ? true : false; 
        let submitValid = this.state.userNameValid && this.state.emailValid && this.state.passwordValid && confirmPasswordValid
        this.setState({confirm_password:event.target.value,confirmPasswordValid:confirmPasswordValid,submitDisabled: !submitValid});
        // if (this.state.password !== this.state.confirm_password) {
        //     this.state.errors.password="Passwords didn't match";
            
        
            
        // }else{
        //     this.state.errors.password="";
        //}
    }

    render() {
        return (
            <div>
        
            <form>
                <h3>Sign Up</h3>

                {/* <div className="form-group">
                    <label>Username:</label>
                    <input type="text" className="form-control" placeholder="John Cena" value={this.state.username} onChange={this.changeUsernameHandler} required />
                </div> */}
                 <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" className="form-control" placeholder="spam@spam.com" value={this.state.email} onChange={this.changeEmailHandler} required/>
                </div>
                <p style={{ color: "red" }}>{this.state.errors.email}</p>

                <div className="form-group">
                    <label>Balance:</label>
                    <input className="form-control" placeholder="00.00" value={this.state.mainbalance} onChange={this.changeMainbalanceHandler} required />
                </div>

               

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="aBcd@1234" value={this.state.password} onChange={this.changePasswordHandler} required/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="aBcd@1234" value={this.state.confirm_password} onChange={this.changeConfirmPasswordHandler} required/>
                </div>
                {/* <p style={{ color: "red" }}>{this.state.errors.password}</p> */}

                <button type="submit" className="btn btn-primary btn-block " onClick={this.saveUser} disabled={this.state.submitDisabled}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/signin">sign in?</a>
                </p>
            </form>
            </div>
        );
    }
}
export default SignUp
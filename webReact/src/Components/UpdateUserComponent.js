import React, { Component } from 'react'
import UserExpense from '../service/api';




class UpdateUser extends Component {
    constructor(props) {
        super(props);
        
    
        this.state = {  id: 11,
                username: '',
                mainbalance: 0,
                password :'',
                email :""
                
        }
        this.changeUsernameHandler=this.changeUsernameHandler.bind(this);
        this.changeMainbalanceHandler=this.changeMainbalanceHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.updateUserData=this.updateUserData.bind(this);
    }
    componentDidMount(){
           
            UserExpense.getUserById(this.state.id).then((res)=>{
                let user = res.data;
                this.setState({username:user.username,
                    mainbalance:user.mainbalance,
                    password:user.password,
                    
    
                });
            });
            console.log(this.props);
        
    }
    updateUserData=(e)=>{
        e.preventDefault();
        let user = {username:this.state.username,mainbalance:this.state.mainbalance,password:this.state.password};
        UserExpense.updateUser(this.state.id,user)
        
            
    }
    changeUsernameHandler=(event)=>{
        this.setState({username: event.target.value});
        
    }
    changeMainbalanceHandler=(event)=>{
        this.setState({mainbalance: event.target.value});
    }
    changePasswordHandler=(event)=>{
        this.setState({password:event.target.value});
    }
    
   
    render() { 
        return (  
            <form action="/home">
                <h3>Update User</h3>

                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" className="form-control" placeholder="John" value={this.state.username} onChange={this.changeUsernameHandler} />
                </div>

                <div className="form-group">
                    <label>Balance:</label>
                    <input className="form-control" placeholder="00.00" value={this.state.mainbalance} onChange={this.changeMainbalanceHandler} />
                </div>


                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="aBcd@1234" value={this.state.password} onChange={this.changePasswordHandler}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.updateUserData}>Update</button>
                
            </form>
        );
    }
}
 
export default UpdateUser;



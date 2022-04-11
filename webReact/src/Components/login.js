 import axios from "axios";
import React, { useEffect, useState} from 'react'


const Login = () => {
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    // const [error,setError] = useState("");
    
    useEffect(()=>{
        Validate();
    })

    const Validate = async (e)=>{
        let credentials ={username,password}
        const res = await axios.post('http://localhost:7777/api/authenticate',credentials)
        // document.cookie=`jwt=${res.data}`
        
        if(res.data!==""){
           
           localStorage.setItem("jwtToken",res.data)
           
            const userbyEmail =await axios({
                method: "get",
                url: `http://localhost:7777/api/displayemail/${username}` 
               
            })
           // alert("Reaching")
        let url=`/home/${userbyEmail.data.id}`;
       window.location=url; 
    }else{
        window.location="/";
    } 
          

    }
   
  return (
    <div>
            <form onSubmit={Validate}>
                <h3>Sign In</h3>
               
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter Email" value ={username} onChange={(e)=>setUsername(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value ={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                       
                    </div>
                </div>

                {/* <button type="submit" className="btn" onClick={Validate}></button> */}
                {/* <p className="forgot-password text-right">
                     <a href="#">Forgot password?</a>
                </p> */}
                <p className="forgot-password text-right">Don't have an account  <a href="/signup">Sign Up</a></p>
                
            </form>
            </div>
  )
}

export default Login
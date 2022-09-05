import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import { useAlert } from 'react-alert'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // useEffect(()=>{
    //     let auth = localStorage.getItem('user');
    //     console.log("auth: ", auth);
    //     if(auth){
    //         navigate('/')
    //     }
    // })
    // const alert = useAlert()
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })
    
    const data = async()=>{
        // console.log(email, password)
        let result = await fetch('http://localhost:5000/login',{
            method: 'post',
            body: JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        console.log("result: react", result);
        if(result.auth){
            localStorage.setItem('user', JSON.stringify(result));
            localStorage.setItem('token', JSON.stringify(result.auth))
            console.log("done........");
            navigate("/")
           
        }  else{
            console.log("incorrect details....");
            alert("incorrect details....")
            navigate("/error")
            // alert.show('Oh look, an alert!')
        }

    }

  return (
    <>
      <div className="register">
        <h1>Login</h1>
        <input className="inputBox"  type="email" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input className="inputBox"  type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="aapButton" onClick={data}>Login</button>
      </div>
    </>
  );
};

export default Login;

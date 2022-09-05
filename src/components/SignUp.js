import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

function SignUp(){
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(false)

const navigate = useNavigate();

useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
        navigate('/')
    }
})

const collectData = async ()=>{
    console.log(name,email,password);    
    if(name != '' && email != '' && password !=''){
        // console.log("name not heeere");
    
    let result = await fetch('http://localhost:5000/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name,email,password})
    })
    result = await result.json()
    console.log(result,"invalid");
    //  if(result){
   
//  }else{

//  }
    if(result){
        localStorage.setItem('user', JSON.stringify(result));
        localStorage.setItem('token', JSON.stringify(result.auth))
        navigate('/')
    } 
}else{
console.log("data not here");
setError(true);
return false
}

}

    return(
       <div className="register">
        <h1>Register</h1>
        <input type='text'className="inputBox" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='text' className="inputBox" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' className="inputBox" placeholder="Enter Password " value={password} onChange={(e)=>setPassword(e.target.value)}/>
        {error &&    <span className="err">inter datail here</span>}
        <button className="aapButton"  type="button" onClick={collectData}>Sign Up</button>
       </div>
    )
}

export default SignUp
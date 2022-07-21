import React, { useState } from "react";

function SignUp(){
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const collectData = ()=>{
    console.log(name,email,password);
}

    return(
       <div className="register">
        <h1>Register</h1>
        <input type='text'className="inputBox" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='text' className="inputBox" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' className="inputBox" placeholder="Enter Password " value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="aapButton"  type="button" onClick={collectData}>Sign Up</button>
       </div>
    )
}

export default SignUp
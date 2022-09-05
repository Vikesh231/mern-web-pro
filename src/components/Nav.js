import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Error from './Error';
import './App.css'; 
// import {  useNavigate } from "react-router-dom";
function Nav() {
  
  const auth = localStorage.getItem('user');
  // console.log("auth: ", auth.result);
  // console.log("navbar");
  
  // let user = {
  //   "result":{
  //     "name":"hfkj","email":"hhffh","_id":"62ee5a4db81c559ccf1ec4e7","__v":0
  //   }}

  const navigate = useNavigate();
    const logout = ()=>{
      console.log("clicked");
      localStorage.clear();
      navigate('/signup')
    }
  return (
    <>
    <div>
     { auth ?
    <ul className='nav-ul'>
        <li><Link to='/'>Product</Link></li>
        <li><Link to='/add'>Add Product</Link></li>
        <li><Link to='/update'>Update Product</Link></li>
        <li><Link to='/profile'>profile</Link></li>
        <li>`<Link onClick={logout} to='/signup'>Logout / {JSON.parse(auth).result.name}</Link>`</li>
         {/* <li>{auth?<Link onClick={logout} to='/signup'>Logout</Link>:
        <Link to='/signup'>Sign Up</Link>}</li>
        <li><Link to='/login'>Login</Link></li> 
         <li><Link to='/login'>Login</Link></li>  */}
         
          {/* auth ? <li><Link onClick={logout} to='/signup'>Logout</Link></li>:
          <>
         <li> <Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/login'>Login</Link></li> 
          </>
          */}


    </ul>:
    <ul className='nav-ul login'>
    <li> <Link to='/signup'>Sign Up</Link></li>
     <li><Link to='/login'>Login</Link></li>
    </ul>
   }
   </div>
    </>
  )
}

export default Nav
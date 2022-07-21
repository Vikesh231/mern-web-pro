import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'; 
// import {  useNavigate } from "react-router-dom";
function Nav() {
    // const navigate = useNavigate();
  return (
    <>
    <ul className='nav-ul'>
        <li><Link to='/'>Product</Link></li>
        <li><Link to='/add'>Add Product</Link></li>
        <li><Link to='/update'>Update Product</Link></li>
        <li><Link to='/logout'>Logout</Link></li>
        <li><Link to='/profile'>profile</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
    </ul>
   
    </>
  )
}

export default Nav
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Add(){
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category,     setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false)
    const [sucess, setSuccess] = useState(false)

    const navigate = useNavigate();

    const Add_P = async()=>{
        if(!name || !price || !category || !company ){
            console.log('name',name, price, category, company);
            // console.error("errorrr");
            setError( true)
            return false
        }else{
        let userId = JSON.parse(localStorage.getItem('user'))._id
        // console.log("local: ", userId);
       let result = await fetch('http://localhost:5000/addproduct',{
            method: 'post',
            body: JSON.stringify({name, price, category, company,userId}),
            headers:{
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        )
        let data =  await result.json()
        console.log("data: ", data);
        
        // console.log('result',result.json());
        setName('')
        setPrice('')
        setCategory('')
        setCompany('')
        setSuccess("Added Product")
        // navigate('/')
        return false


    }
    }

 return (
    <>
    <div>
        <div className="register">
        <h1>Add Products</h1>
        <input className="inputBox"  type="text" placeholder="Product Name" value={name} onChange={(e)=> setName(e.target.value)} />
        {error && !name &&   <span className="err">inter valid name</span>}
        <input className="inputBox"  type="text" placeholder="Product Price" value={price} onChange={(e)=> setPrice(e.target.value)} />
        {error && !price &&   <span className="err">inter valid price</span>}
        <input className="inputBox"  type="text" placeholder="Product Category" value={category} onChange={(e)=> setCategory(e.target.value)} />
        {error && !category &&   <span className="err">inter valid category</span>}
        <input className="inputBox"  type="text" placeholder="Product Company" value={company} onChange={(e)=> setCompany(e.target.value)} />
        {error && !company &&   <span className="err">inter valid company</span>}
        <button className="aapButton" onClick={Add_P} >Add</button>
        {<span className="sucess">{sucess}</span>}
      </div>
    </div>
    </>
 )
}
export default Add;
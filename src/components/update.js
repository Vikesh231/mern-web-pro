import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'

function Update(){
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category,     setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false)
    const [sucess, setSuccess] = useState(false)

    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        // console.log(params);
        getProducts();
    },[])
      
const getProducts = async()=>{
    // console.log(params,'get');
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
        headers:{
            authorization: `beareds ${JSON.parse(localStorage.getItem('token'))}`
          }
    })
    result = await result.json();
    console.log("result update: ", result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
}

    const update_Pro = async()=>{
        console.log(name,price, category, company);
        let result = await fetch(`http://localhost:5000/update/${params.id}`,{
            method: 'put',
            body: JSON.stringify({name, price, category, company}),
            headers:{
                'Content-Type': 'application/json',
                authorization: `beareds ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json();
        navigate('/')
    }

   
 return (
    <>
    <div>
        <div className="register">
        <h1>Update Products</h1>
        <input className="inputBox"  type="text" placeholder="Product Name" value={name} onChange={(e)=> setName(e.target.value)} />
        <input className="inputBox"  type="text" placeholder="Product Price" value={price} onChange={(e)=> setPrice(e.target.value)} />
        <input className="inputBox"  type="text" placeholder="Product Category" value={category} onChange={(e)=> setCategory(e.target.value)} />
        <input className="inputBox"  type="text" placeholder="Product Company" value={company} onChange={(e)=> setCompany(e.target.value)} />
       
        <button className="aapButton" onClick={update_Pro} >Update</button>
      </div>
    </div>
    </>
 )
}
export default Update;
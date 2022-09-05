import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getproduct();
  }, []);

  const getproduct = async () => {
    let result = await fetch("http://localhost:5000/product",{
      headers:{
        authorization: `beareds ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    console.log("sdfghjklkhjkjkkk", result);
    // setProduct(result);


    // ***************
    if(Array.isArray(result)){
      console.log('/product');
      setProduct(result);
    }else{
      console.log("/login");
    localStorage.clear();
      navigate('/login')
    }
   
  };

  const deletePro = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
      headers:{
        authorization: `beareds ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    if (result) {
      getproduct();
    }
  };

  const searchHandle = async (e) => {
    // console.log(e.target.value);
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`,{
        headers:{
          authorization: `beareds ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      result = await result.json();
      if (result) {
        setProduct(result);
        
      }
    }else{
      getproduct();
    }
  };

  // console.log(product[1].name,'pro');
  return (
    <>
      <div className="register">
        <h1>Product List</h1>
        <input
          type="text"
          className="search"
          placeholder="search product"
          onChange={searchHandle}
        />

        <table id="customers">
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Company</th>
            <th>Action</th>
          </tr>

          { product.map((element, index) => {
            return (
              <tr key={element._id}>
                <td>{index + 1}</td>
                <td>{element.name}</td>
                <td>{element.price}</td>
                <td>{element.category}</td>
                <td>{element.company}</td>
                <td>
                  <button
                    className="buttons"
                    onClick={() => deletePro(element._id)}
                  >
                    Delete
                  </button>
                  {/* <Link to={"/update/"+element._id  }>update</Link>  */}
                  <button className="link">
                    <Link className="link" to={"/update/" + element._id}>
                      Update
                    </Link>{" "}
                  </button>
                  {/* ${element._id} */}
                </td>
              </tr>
            );
            
          })
          
          }
        </table>
      </div>
    </>
  );
}
export default Product;

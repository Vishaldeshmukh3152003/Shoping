import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import '../style/SeeProduct.css'
import { Link } from 'react-router-dom';
// import { Warning } from 'postcss';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function SeeProduct() {
    const [data, setData] = useState([]);
    const [force ,setForce]=useState(0);
    useEffect(() => {
        async function get() {
            try {
                const res = await fetch("http://localhost:3000/product");
                const out = await res.json();
                setData(out)
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        }

        get();
    }, [force]);


  function remove_item(id ,name)
  {
   axios.delete(`http://localhost:1000/product/${id}`)
  .then((res) => {
    if (res.status === 200) {
      toast.success(`${name} deleted`);
      setForce(prev => prev + 1);
    } else {
      toast.error("Delete failed with status " + res.status);
    }
  })
  .catch((err) => {
    console.error(err);
    toast.error("not deleted");
  });

  }

  let nevigate=useNavigate();
  function edit_item(id)
  {
    nevigate(`/AdminHomepage/updateproduct/${id}`)
  }

    return (
        <div>
            {/* <Navbar /> */}
            <h1 style={{ textAlign: "center", color: "rgb(0, 123, 255)" }}>See Product</h1>
            <div className='product'>
                {data.map((item, index) => (
                    <div className='pro' key={index} style={{ padding: '20px' }}>
                        <img className='img' src={item.ImageURL} alt={item.name} style={{ width: '200px', borderRadius: '10px' }} />
                        <Link state={item} to={`/AdminHomepage/viewproduct/${item.id}`} style={{textDecoration:"none"}}><h4>{item.name}</h4></Link>
                        <p><strong>Price:</strong> <strike>₹{item.price}</strike></p>
                        <p><strong>Offer Price:</strong> ₹{item.price-item.price*0.15}</p>
                        <p><strong>Category:</strong> {item.Category}</p>
                        <p><strong>Brand:</strong> {item.Brand}</p>
                        <p><strong>Description:</strong> {item.Description}</p>
                        <p>
                            <strong style={{ color: item.Stock > 10 ? "green" : "red" }}>Stock:</strong> {item.Stock}
                        </p>
                        <p style={{ color: item.Rating >= 4 ? "green" : "red" }}>
                            <strong>Rating:</strong> {item.Rating}
                        </p>
                       <div className="btn">
                      <button   onClick={()=>{edit_item(item.id)}} className="btn btn-warning">Edit</button>
                        <button onClick={()=>{remove_item(item.id,item.name)}} className="btn btn-danger">Delete</button>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SeeProduct;

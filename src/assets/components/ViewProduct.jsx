import React from 'react'
import { useLocation } from 'react-router-dom'
import '../style/ViewProduct.css'
function ViewProduct() {

    let location =useLocation();    
    let product=location.state;
    console.log(location);
  return (
   
     <div className="ViewProduct">
        {/* <h1>hy</h1> */}
      <div className="image">
        <img className='mainimage' src={product.ImageURL} alt="" />
      </div>
      <div className="desc">
         <h1>{product.name}||{product.Category}||{product.Brand}</h1>
         <p><b>Price:</b><strike>₹{product.price}</strike></p>
         <p><b>Offer Price:</b>{product.price-product.price*0.15}</p>
         <p className='desc'><b>Description:</b>{product.Description}</p>
         <p><b>Rating:</b><span style={{ color: product.Rating >= 4 ? "green" : "red" }}>{product.Rating}</span></p>
         <p><b>Stock:</b> <span  style={{ color: product.Stock > 10 ? "green" : "red" }}>{product.Stock}</span></p>
      </div>
     </div>

  )
}

export default ViewProduct

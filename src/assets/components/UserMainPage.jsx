import React, { useEffect, useState } from 'react';
import '../style/UserMainPage.css';
import UserNavbar from './UserNavbar';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import BuyProduct from './BuyProduct';
import { createContext } from 'react';
// import { Link } from 'react-router-dom';
export const contextData = createContext();
function UserMainPage(props) {
      const { buy, setBuy } = props;

    
  const [data, setData] = useState([]);
  const [item, setItem] = useState(0);
  let flag=true;
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/product")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  function additem(data) {
    setItem(pre => pre + 1);
    // console.log('hy '+buy);
    setBuy((pre)=>[...pre,data])    
  }

//   function Add() {
//     navigate('/UserLandingPage/BuyProduct');
//   }

  return (
    <contextData.Provider value={item}>
      <div>
        <UserNavbar />
        <Link  className='card' to='/UserLandingPage/BuyProduct'>
          <b>item:<b style={{ color: "white" }}>{item}</b></b>
        </Link>
        <div className='product'>
          {data.map((item, index) => (
            <div className='pro' key={index} style={{ padding: '20px' }}>
              <img className='img' src={item.ImageURL} alt={item.name} style={{ width: '200px', borderRadius: '10px' }} />
              <Link state={item} to={`/AdminHomepage/viewproduct/${item.id}`} style={{ textDecoration: "none" }}>
                <h4>{item.name}</h4>
              </Link>
              <p><strong>Price:</strong> <strike>₹{item.price}</strike></p>
              <p><strong>Offer Price:</strong> ₹{item.price - item.price * 0.15}</p>
              <p><strong>Category:</strong> {item.Category}</p>
              <p><strong>Brand:</strong> {item.Brand}</p>
              <p><strong>Description:</strong> {item.Description}</p>
              <p><strong style={{ color: item.Stock > 10 ? "green" : "red" }}>Stock:</strong> {item.Stock}</p>
              <p style={{ color: item.Rating >= 4 ? "green" : "red" }}>
                <strong>Rating:</strong> {item.Rating}
              </p>
              <div className="btn">
                <button onClick={() => additem(item)} type="button" className="btn btn-success">Add</button>
              </div>
            </div>
          ))}
        </div>
        {/* {flag?'':<BuyProduct/>}; */}
        {/* <BuyProduct/> */}
      </div>
    </contextData.Provider>
  );
}

export default UserMainPage;
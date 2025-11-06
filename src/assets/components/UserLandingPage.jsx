import React from 'react'
import UserMainPage from './UserMainPage'
import { Routes, Route } from 'react-router-dom';
// import UserMainPage from './assets/components/UserMainPage'
import BuyProduct from './BuyProduct';
import { useState } from 'react';
function UserLandingPage(props) {
     const [buy, setBuy] = useState([]);
     
const {obj,setObj} = props;

     console.log('LLID: ',obj);
  return (
    <div>
       
       <Routes>
          <Route path='/' element={<UserMainPage buy={buy} setBuy={setBuy}/>} />
          <Route path='/BuyProduct' element={<BuyProduct buy={buy} setBuy={setBuy} obj={obj} setObj={setObj}/>}/>
      </Routes>
    </div>
  )
}

export default UserLandingPage

import React from 'react'
import { Link } from 'react-router-dom'
import Landingpage from './Landingpage'
import Navbar from './Navbar'
import AddProduct from './AddProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SeeProduct from './SeeProduct'
import ViewProduct from './ViewProduct'
import '../style/AdminHomepage.css'
import UpdateProduct from './UpdateProduct'
function AdminHomepage() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
       <Routes>
          <Route path='/add-product' element={<AddProduct/>} />
          <Route path='/' element={<SeeProduct/>}/>
          <Route path='/viewproduct/:id' element={<ViewProduct/>}/>
          <Route path='/updateproduct/:id' element={<UpdateProduct/>}/>
        </Routes>
    </div>
  )
}

export default AdminHomepage

import './App.css'
import Landingpage from './assets/components/Landingpage'
import UserLogin from './assets/components/UserLogin'
import AdminLogin from './assets/components/AdminLogin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AdminSign from './assets/components/AdminSign'
import AdminHomepage from './assets/components/AdminHomepage'
import Error from './assets/components/Error'
import SeeProduct from './assets/components/SeeProduct'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from './assets/components/UserNavbar'
import UserLandingPage from './assets/components/UserLandingPage'
import { useState } from 'react'
function App() {

const [obj,setObj]=useState([]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/UserLogin' element={<UserLogin obj={obj} setObj={setObj}/>} />
          <Route path='/AdminSign' element={<AdminSign />} />
          <Route path='AdminHomepage/*' element={<AdminHomepage/>} />
          <Route path='/UserLandingPage/*' element={<UserLandingPage obj={obj} setObj={setObj}/>} />
          <Route path='/Usernavbar' element={<UserNavbar />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>

    </div>
  )
}

export default App

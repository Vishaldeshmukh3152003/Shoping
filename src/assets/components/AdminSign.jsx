import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import '../style/AdminSign.css'
import { useNavigate } from 'react-router-dom';
function AdminSign() {
  const [admin, setAdmin] = useState({
    Uname: "",
    email: "",
    password: "",
    phone: ""
  })

  let nevigate =useNavigate();

  function handletChange(e) {
    let { name, value } = e.target;
    setAdmin((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }


  //npm install axios
  //npx json-server --watch src/database/data.json --port 1000

  function register(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/admins", admin)
      .then((res) => {
        toast.success("login succesfull")
        setAdmin({
          Uname: "",
          email: "",
          password: "",
          phone: ""
        });
   
      nevigate("/AdminLogin")

      })
      .catch((err) => {
        toast.error("Invalid")
      })
  }
  return (
    <div className='AdminSign'>
      <div className="thumnail"></div>
      <form  className="signform" onSubmit={register} action="">
        <label className='signlabel' htmlFor="">Name</label>
        <input className='signinput' type="text" name="Uname" value={admin.Uname} onChange={handletChange} required/>
        <label className='signlabel' htmlFor="">Email</label>
        <input className='signinput' type="text" name="email" value={admin.email} onChange={handletChange} required />
        <label className='signlabel' htmlFor="">password</label>
        <input className='signinput' type="text" name="password" value={admin.password} onChange={handletChange} required />
        <label className='signlabel' htmlFor="">phone</label>
        <input className='signinput' type="text" name="phone" value={admin.phone} onChange={handletChange} />
        <button className='signbtn' >submit</button>
      </form>
    </div>
  )
}

export default AdminSign

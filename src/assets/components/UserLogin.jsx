import React, { useEffect, useState } from 'react';
import '../style/User.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import UserLandingPage from './UserLandingPage';
function UserLogin(props) {

const {obj,setObj} = props;

  // console.log('befor'+userEmail);

  const [hide, setHide] = useState(false);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [data, setData] = useState([]);
  let navigate = useNavigate();
 

  //  console.log('onkjnb',userEmail);
  //  console.log('ID: ',obj);
   
  //  console.log('this is'+' '+userEmail);
   
  const toggleVisibility = () => {
    setHide(!hide);
  };

  useEffect(() => {
    function getData() {
      try {
        axios.get('http://localhost:3001/admins')
          .then((res) => {
            // console.log(res);
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
      }
      catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [])
  // console.log(data);

  const val_login = (e) => {
    e.preventDefault();

    let isValid = data.some(index => {
      setObj(index)
      return index.email.trim() === email && index.password.trim() === pwd;
    });

    // console.log(isValid);

    if (isValid) {
      // console.log("fgdhsjak");

      toast.success('Login Successful');
      navigate('/UserLandingPage');
    } else {
      toast.error('Login Failed');
    }
    setEmail(pre=>'');
    setPwd(pre=>'');
  };

  return (
    
 
    <div className='user-form-div'>
      <form onSubmit={val_login} className="user-form">
        <div className="inputdiv">
          <label className="form-label">Name</label>
          <input
            id='inputt'
            className="form-control"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="inputdiv">
          <label className="form-label">Password</label>
          <span className="toggle-btn" onClick={toggleVisibility}>
            {hide ? '👁️' : '🙈'}
          </span>
          <input
            id='inputt2'
            className="form-control"
            type={hide ? 'text' : 'password'}
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required
          />
        </div>
        <button type="submit" id='formbtn' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}

export default UserLogin;
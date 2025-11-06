import React, { useState } from 'react'
import '../style/AdminLogin.css'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
function AdminLogin() {
    const [admin, setfadmins] = useState([]);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        axios.get('http://localhost:3001/admins')
            .then((res) => setfadmins(res.data))
            .catch(() => alert("error"));
    }, []);

    console.log(admin);
    
    function val_login(data) {
        const match = admin.filter((item) => {
            return item.email === data.email && item.password === data.password;
        });

        if (match.length > 0) {
            toast.success("Login Successful");
            navigate('/AdminHomepage');
        } else {
            toast.error("Login Failed");
        }
        reset();
    };

    return (
        <div className='FormAdmin'>
            <form onSubmit={handleSubmit(val_login)}>
                <label>UserName</label>
                <div className="input">
                    <input  className={errors.email?'errorinput':''}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email format",
                            },
                        })}
                        type="text"
                        placeholder="Email"
                    />
                    {errors.email && <span className='error'>{errors.email.message}</span>}
                </div>

                <label>Password</label>
                <div className="input">
                    <input className={errors.password?'errorinput':''}
                        {...register("password", {
                            required: "Password is required",
                            //   pattern: {
                            //     value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            //     message: "Password must be strong",
                            //   },
                        })}
                        type="password"
                        placeholder="Password"
                    />
                    {errors.password && <span className='error'>{errors.password.message}</span>}
                </div>

                <button>Submit</button>
                <Link to="/AdminSign">New Admin? Register</Link>
            </form>
        </div>
    );
}

export default AdminLogin

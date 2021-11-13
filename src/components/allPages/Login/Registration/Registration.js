import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import registrationImg from '../../../../images/registrationPage.jpg'
import useAuth from './../../../hooks/useAuth';
import swal from 'sweetalert';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {registerUser} = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    let handleRegistrationSubmit=(e)=>{
        if (loginData.password !== loginData.password2) {
            swal("", "Password Mismatched", "error");
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
      <div className='container mt-5'>
        <div className="main">
                 <h4 className="title">Registration Here</h4>
            </div>
            <div className='row d-flex align-items-center'>
                <div className='col-md-6 border border-success shadow-lg p-4'>
                    <form onSubmit={handleRegistrationSubmit}>
                        <div className="mb-3">
                            <label  className="form-label">Your Name</label>
                            <input type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Type Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Email Address</label>
                            <input type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Type Your Email"
                            name="email"
                            onBlur={handleOnBlur}
                            />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Password</label>
                            <input type="password" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Type Your Password"
                            name="password"
                            onBlur={handleOnBlur}
                            />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Retype Password</label>
                            <input type="password" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Retype Your Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            />
                        </div>
                        <div className="mb-3">
                            <button className='btn btn-primary' type='submit'> Registration </button>
                        </div>
                    </form>
                    <Link to='/login'> Old User?? <button className='btn btn-success'> Login  </button>   </Link>
                </div>
                <div className='col-md-6'>
                    <img src={registrationImg} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    );
};

export default Registration;
import React, {useState} from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import loginimg from '../../../../images/loginpage.jpg'
import useAuth from './../../../hooks/useAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { authError, loginUser } = useAuth();

    const location = useLocation();
    const history = useHistory();

    let handleOnBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    
    let handleLoginSubmit=(e)=>{
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div className='container mt-5'>
        <div className="main">
                 <h4 className="title">Login Please</h4>
            </div>
            <div className='row d-flex align-items-center'>
                <div className='col-md-6 border border-success shadow-lg p-4'>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Type Your Email"
                            name="email"
                            onBlur={handleOnBlur}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Type Your Password"
                            name="password"
                            onBlur={handleOnBlur}
                            />
                        </div>
                        <div className="mb-3">
                            <button className='btn btn-success' type='submit'> Login </button>
                        </div>
                    </form>
                    <p className='text-danger fw-bold'> {authError} </p>
                    <Link to='/registration'> New User?? <button className='btn btn-primary'> Registration  </button>   </Link>
                </div>
                <div className='col-md-6'>
                    <img src={loginimg} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    );
};

export default Login;
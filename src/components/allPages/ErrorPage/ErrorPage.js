import React from 'react';
import {NavLink} from 'react-router-dom';
import notFoundImg from '../../../images/istockphoto-1319650191-170667a.jpg'
const ErrorPage = () => {
    return (
            <div className='container'>
            <div className='row my-5 '>
                <div className='col-md-10 mx-auto'>
                    <img src={notFoundImg} alt="" className="img-fluid" style={{height:"400px"}} /> <br />
                    <NavLink to="/" className='btn btn-success mt-3'> Home Page </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
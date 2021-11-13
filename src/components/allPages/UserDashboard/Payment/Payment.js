import React from 'react';
import { Link } from 'react-router-dom';
import comingSoonImg from '../../../../images/comingSoon.jpg'
const Payment = () => {
    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-6'>
                    <h4 className='fw-bold border border-success p-4'>Payment Gateway Option is Coming Soon... </h4>
                    <img src={comingSoonImg} alt="" className='img-fluid' />
                    <Link to='/myOrders' className='btn btn-success mt-3'> My Orders </Link>
                </div>
            </div>
        </div>
    );
};

export default Payment;
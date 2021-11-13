import React from 'react';
import useAuth from './../../hooks/useAuth';

const DashBoardMessage = () => {
    let {user} = useAuth()
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-8 border border-black bg-success text-white p-4 mx-auto'>
                     <h3>Welcome To The Dashboard {user.displayName} </h3>
                </div>
            </div>
           
        </div>
    );
};

export default DashBoardMessage;
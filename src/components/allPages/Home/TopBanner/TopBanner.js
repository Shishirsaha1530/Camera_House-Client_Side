import React from 'react';
import './TopBanner.css'


const TopBanner = () => {
    return (
    <div id='topBannerBg' className='d-flex flex-column justify-content-center align-items-center'> 
        <h3 className='text-center text-white font-monospace mb-2'>FIND THE BEST CAMERA </h3>
        <p className='text-center fw-bold text-white'> “The picture that you took with your camera is the imagination you want to create with reality.” – Scott Lorenzo </p>
        <div className="input-group w-50 mb-3">
            <input type="text" className="form-control" placeholder="Search The Camera You Want" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <span className="input-group-text btn btn-success" id="basic-addon2"> Search Camera </span>
        </div>
    </div>
    );
};

export default TopBanner;
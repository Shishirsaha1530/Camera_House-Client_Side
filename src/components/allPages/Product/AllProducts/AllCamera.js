import React, { useState, useEffect } from 'react';
import ProductCard from '../SingleProduct/ProductCard';

const AllCamera = () => {
    let [cameras, setCameras] = useState([])

        // loading data
     useEffect(()=>{
        fetch('https://sheltered-headland-29494.herokuapp.com/cameras')
        .then(res=> res.json())
        .then(data=>setCameras(data.slice(0,6)))
    },[])

    return (
        <div className='mt-5 pb-3 container'>
            <div className="main">
                 <h4 className="title">Our Top Selling Cameras </h4>
                 <p className='lead'>Choose Your Camera and Get Best Service From Us </p>
            </div>
            <div className='row mt-3 gy-4'>
                    {
                        cameras.map((item)=>{
                            return(
                                                
                                <div className='col-md-4' key={item._id}>
                                    <ProductCard productItem={item}> </ProductCard>
                                </div>           
                                )
                            })
                    }
            </div>
        </div>
    );
};

export default AllCamera;
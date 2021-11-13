import React, { useState, useEffect } from 'react';
import ProductCard from './../SingleProduct/ProductCard';

const ExploreCamera = () => {
    let [cameras, setCameras] = useState([])

    // loading data
     useEffect(()=>{
        fetch('https://sheltered-headland-29494.herokuapp.com/cameras')
        .then(res=> res.json())
        .then(data=>setCameras(data))
    },[])

    return (
        <div className='mt-5 pb-3 container'>
            <div className="main">
                 <h4 className="title"> All Cameras </h4>
                 <p className='lead'> Choose Your Camera from Our Huge Camera Collection. You Will Get DSLR, Action Cam, Digital Camera of different brand. </p>
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

export default ExploreCamera;
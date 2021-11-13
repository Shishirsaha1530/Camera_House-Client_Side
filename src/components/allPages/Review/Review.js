import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';

const Review = () => {
    let [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('https://sheltered-headland-29494.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    return (
        <div className='container mt-5'>
            <div className="main">
                 <h4 className="title"> Customer Review</h4>
                <p className='lead text-center'> Customer Satisfaction is Our First Priority! </p>
            </div>

            <div className='row'>

                {
                    reviews.map(item=>{
                        return(
                            <div className='col-md-6 gy-3' key={item._id}>
                                <ReviewCard allReviews={item}> </ReviewCard>
                            </div>
                        )
                    })
                }

            </div>

            
        </div>
    );
};

export default Review;
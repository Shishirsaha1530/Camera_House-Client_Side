import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const ReviewForm = () => {
    const { register, handleSubmit, reset } = useForm();

      const onSubmit = data =>{
        axios.post('https://sheltered-headland-29494.herokuapp.com/reviews', data)
            .then(response => {
                if (response.data.insertedId) {
                   swal("Thank You!", "Review Added Successfully!", "success");
                    reset();
                }
            })
  } 
    return (
         <div className='mt-5 container'>
            <div className='bg-success text-white shadow-lg mb-3 p-3 border border-dark d-flex justify-content-center'>
               <h4 className='text-center text-white'> Add A Review </h4>
            </div>
            
            <div className='row d-flex justify-content-center mt-5'>
                <div className='col-md-6'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <input className='form-control mb-3' {...register("name", { required: true, maxLength: 40 })} placeholder="Your Name" />


                    <textarea className='form-control mb-3' {...register("review")} placeholder="Write Your Review" />

                    <input className='form-control mb-3' type='number'  {...register("rating")} placeholder="Put Rating" />

                    <input type="submit" className='btn btn-success' />

                     </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewForm;
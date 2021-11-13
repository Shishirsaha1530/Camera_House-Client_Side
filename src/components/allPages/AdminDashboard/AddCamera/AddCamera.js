import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';


const AddCamera = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data =>{
        axios.post('https://sheltered-headland-29494.herokuapp.com/cameras', data)
            .then(response => {
                if (response.data.insertedId) {
                    swal("", "Product Added Successfully!", "success");
                    reset();
                }
            })
  } 

    return (
            <div className='mt-5 container'>
            <div className='bg-success text-white shadow-lg mb-3 p-3 border border-dark d-flex justify-content-center'>
               <h4 className='text-center text-white'> Add New Camera </h4>
            </div>
            
            <div className='row d-flex justify-content-center'>
                <div className='col-md-6'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <input className='form-control mb-3' {...register("model", { required: true, maxLength: 40 })} placeholder="Model Name" />

                    <input className='form-control mb-3' {...register("brand", { required: true, maxLength: 50 })} placeholder="Brand Name" />

                    <textarea className='form-control mb-3' {...register("description")} placeholder="Description" />

                     <input className='form-control mb-3' type="number" {...register("price")} placeholder="Price" />

                    <input className='form-control mb-3'  {...register("rating")} placeholder="Camera Rating" />

                    <input className='form-control mb-3' {...register("img")} placeholder="image url" />

                    <input type="submit" className='btn btn-success' />

                     </form>
                </div>
            </div>
        </div>
    );
};

export default AddCamera;
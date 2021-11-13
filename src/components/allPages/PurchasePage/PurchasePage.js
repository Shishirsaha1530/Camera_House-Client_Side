import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from './../../hooks/useAuth';
import swal from 'sweetalert';

const PurchasePage = () => {
     let {user} = useAuth()
    const { register, handleSubmit, reset} = useForm();
    const [details, setDetails] = useState({})
    const { id } = useParams();


    const onSubmit = data =>{
    data.details = details;
    data.email = user.email;
    data.status = "Pending";
 
    fetch(`https://sheltered-headland-29494.herokuapp.com/addOrders`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          swal("Ordered!", "Order Placed Successfully!", "success");
          reset();
        }
      });

    } 


    useEffect(()=>{
        fetch(`https://sheltered-headland-29494.herokuapp.com/cameras/${id}`)
        .then(res=>res.json())
        .then(data=> setDetails(data)) 
    },[])


    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-5'>

                    <div className="card shadow-lg  bg-body rounded" >
                    <img src={details.img} className="card-img-top img-fluid mx-auto" style={{height:"auto", width:"200px"}}  alt="..."/>

                    <div className="card-body">
                        <h5 className="card-title"> Model: {details.model} </h5>
                        <p className="card-text cardText"> Brand: {details.brand}</p>
                        <p className="card-text cardText">{details.description}</p>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Package Rating: {details.rating}  </li>
                        <li className="list-group-item">Price: {details.price} taka</li>
                    </ul>
                </div>
                </div>


                <div className='col-md-7'>
                    <h5 className='text-center mb-3 text-success'>Place Order Now </h5>
                        <form onSubmit={handleSubmit(onSubmit)}>  

                        <input className='form-control mb-2' defaultValue={user.displayName} {...register("name")} />

                        <input className='form-control mb-2' defaultValue={user.email} {...register("email", { required: true })} />
                        
                        <input className='form-control mb-2' placeholder="Address" defaultValue="" {...register("address")} />

                        <input className='form-control mb-2' placeholder="Quantity" defaultValue="" type="number" {...register("quantity")} />

                        <input className='form-control mb-2' placeholder="Phone Number" defaultValue="" type="number" {...register("phone")} />

                        <input type="submit" className='btn btn-success' />

                        </form>
                </div>
            </div>

            
        </div>
    );
};

export default PurchasePage;
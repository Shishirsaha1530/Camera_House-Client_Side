import React, { useEffect, useState } from "react";
import useAuth from './../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert';

const cancel = <FontAwesomeIcon icon={faTrash} />

const MyOrder = () => {
    let {user} = useAuth()

    const [orders, setOrders] = useState([]);
    const email = user.email;

    useEffect(() => {
    fetch(`https://sheltered-headland-29494.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [email]);

    let handleDelete =(id)=>{
        const confirmed = window.confirm("Are You Sure to Cancel Your Order?")
        if(confirmed){
        const url = `https://sheltered-headland-29494.herokuapp.com/myOrders/${id}`;
        fetch(url, {
             method:'DELETE'
         })
        .then(res=>res.json())
        .then(data=>{
             if(data.deletedCount){
                swal("Removed!", "Order Cancelled Successfully!", "error");
                const remainingOrder = orders.filter(order=>order._id !== id)
                console.log(remainingOrder)
                setOrders(remainingOrder)
            }
        }) 
        }
    }

    return (
       <div className='mt-5 pb-3 container'>
       
            <div className='bg-success text-white shadow-lg mb-3 p-3 border border-dark d-flex justify-content-center'>
               <h4 className='text-center text-white'> All Placed Orders </h4>
            </div>
            
            <div className='row mt-3 gy-4'>
                    {
                        orders.map((item)=>{
                            return(
                                                
                        <div className='col-md-4 mx-auto' key={item.details._id}>
                        <div className="card shadow-lg  bg-body rounded" >
                            <img src={item.details.img} className="card-img-top img-fluid mx-auto" style={{height:"auto", width:"200px"}}  alt="..."/>
                        <div className="card-body">
                             <h5 className="card-title">Model: {item.details.model} </h5>
                             <p className="card-text cardText">Brand: {item.details.brand}</p>
                             <p className="card-text cardText">{item.details.description}</p>
                        </div>
                            <ul className="list-group list-group-flush">
                                 <li className="list-group-item">Quantity:  {item.quantity} </li>
                                 <li className="list-group-item text-danger"> Status : {item.status} </li>
                            </ul>
                                
                                <button onClick={()=>handleDelete(item._id)} className='btn btn-danger'> Cancel Order {cancel} </button>
                        </div>  
                                    
                        </div>           
                                )
                            })
                    }
            </div>
        </div>
    );
};

export default MyOrder;
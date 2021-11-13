import React, { useEffect, useState } from "react";
import swal from 'sweetalert';


const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
    setStatus(e.target.value);
    };

    useEffect(() => {
       fetch(`https://sheltered-headland-29494.herokuapp.com/myOrders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

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
                swal("Cancelled!", "Order Cancelled Successfully!", "error");
                const remainingOrder = orders.filter(order=>order._id !== id)
                console.log(remainingOrder)
                setOrders(remainingOrder)
             }
         }) 
         }
    }

    // const status = "apporved";
    const handleUpdate = (id) => {
    fetch(`https://sheltered-headland-29494.herokuapp.com/updateStatus/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    });

    console.log(id);
  };

    return (
        <div className="mt-5">
             <div className='bg-success text-white shadow-lg mb-3 p-3 border border-dark d-flex justify-content-center'>
               <h4 className='text-center text-white'> Manage All orders </h4>
            </div>
            <div className='row'>
                <div className='col-md-12 table-responsive'>
                <table className="table text-center table-striped table-hover mt-3">
                    <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Model</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    {orders?.map((item) => (
                    <tbody key={item._id}>
                        <tr>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                        <td>{item.details.model}</td>
                        <td>{item.quantity}</td>
                        <td><input onChange={handleStatus} type="text" defaultValue={item.status}/></td>
                        <td><button onClick={() => handleUpdate(item._id)} className="btn bg-warning p-2"> Update </button></td>
                        <td><button className="btn btn-danger p-2" onClick={()=>handleDelete(item._id)}>Delete</button></td>
                        </tr>
                    </tbody>
                    ))}
                </table>
                </div>
            </div>
    </div>
    );
};

export default ManageOrder;
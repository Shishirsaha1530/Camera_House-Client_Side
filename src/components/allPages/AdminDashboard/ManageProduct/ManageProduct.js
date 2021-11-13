import React,{useEffect, useState} from 'react';
import swal from 'sweetalert';

const ManageProduct = () => {
    let [manageProduct, setManageProduct] = useState([])
    useEffect(()=>{
        fetch('https://sheltered-headland-29494.herokuapp.com/cameras')
        .then(res=>res.json())
        .then(data=>{
            setManageProduct(data)
        })
    },[])

    let handleDelete =(id)=>{
          const confirmed = window.confirm("Are You Sure to Remove The Product?")
          if(confirmed){
         const url = `https://sheltered-headland-29494.herokuapp.com/cameras/${id}`;
         fetch(url, {
             method:'DELETE'
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.deletedCount){
                swal("", "Product Removed Successfully!", "error");
                const remainingProduct = manageProduct.filter(order=>order._id !== id)
                setManageProduct(remainingProduct)
             }
         }) 
         }
    }
    return (
        <div className='container mt-5'>
             <div className='bg-success text-white shadow-lg mb-3 p-3 border border-dark d-flex justify-content-center'>
               <h4 className='text-center text-white'> Manage All Product </h4>
            </div>

            <div className='row'>
                <div className='col-nd-12 table-responsive'>
             <table className="table text-center table-striped table-hover mt-3">
                    <thead>
                    <tr>
                        <th scope="col">Product No</th>
                        <th scope="col">Model </th>
                        <th scope="col">Brand</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                    </tr>
                    </thead>
                    {manageProduct?.map((item, index) => (
                    <tbody key={item._id}>
                        <tr>
                        <td> {index+1} </td>
                        <td>{item.model}</td>
                        <td>{item.brand}</td>
                        <td>{item.price}</td>
                        <td> <img src={item.img} alt="" style={{width:"30px"}} />  </td>
                        <td> <button onClick={()=>handleDelete(item._id)}  className="btn btn-danger p-2"> Remove Product</button></td>
                        </tr>
                    </tbody>
                    ))}
                </table>
                </div>
            </div>
        
        </div>
    );
};

export default ManageProduct;
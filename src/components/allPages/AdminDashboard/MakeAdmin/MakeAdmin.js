import React, {useState} from 'react';
import './MakeAdmin.css'
import swal from 'sweetalert';

const MakeAdmin = () => {
    const [email, setEmail]=useState('');
    let handleBlur=(e)=>{
        let value = e.target.value;
        setEmail(value)
    }
    let handleadmin=(e)=>{
        const user = { email };
        fetch('https://sheltered-headland-29494.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal("", "Admin Added Successfully!", "success");
                }
                else{
                    swal("", "Something Went Wrong", "error");
                }
            })

        e.preventDefault()
    }
    return (
        <div className='mt-5 container'>
         <div className='bg-success text-white shadow-lg mb-3 p-3 border border-dark d-flex justify-content-center'>
               <h4 className='text-center text-white'> Make An Admin </h4>
            </div>
            <div className='row my-5 pb-5'>
                <div className='col-md-6 mx-auto'>
                    <form onSubmit={handleadmin}>
                         <input type="text" className='makeAdminInput' placeholder='Write Email Address' onBlur={handleBlur} />
                         <button type='submit' className='btn btn-success mt-3'> Submit </button>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default MakeAdmin;
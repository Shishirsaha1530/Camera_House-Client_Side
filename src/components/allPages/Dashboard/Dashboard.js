import React from 'react';
import './Dashboard.css';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import MyOrder from './../UserDashboard/MyOrders/MyOrder';
import ReviewForm from './../UserDashboard/Reviews/ReviewForm';
import Payment from './../UserDashboard/Payment/Payment';
import useAuth from './../../hooks/useAuth';
import ManageOrder from './../AdminDashboard/ManageOrder/ManageOrder';
import AddCamera from './../AdminDashboard/AddCamera/AddCamera';
import ManageProduct from './../AdminDashboard/ManageProduct/ManageProduct';
import MakeAdmin from './../AdminDashboard/MakeAdmin/MakeAdmin';
import DashBoardMessage from './DashBoardMessage';

const Dashboard = () => {
     let { path, url } = useRouteMatch();
     let {logout, admin} = useAuth()


    const order = <FontAwesomeIcon icon={faShoppingCart} />
    const review = <FontAwesomeIcon icon={faBookOpen} />
    const payment = <FontAwesomeIcon icon={faMoneyCheckAlt} />
    const product = <FontAwesomeIcon icon={faCamera} />
    const plus = <FontAwesomeIcon icon={faPlus} />
    const adminIcon = <FontAwesomeIcon icon={faUserShield} />
    return (
        <div className='container'>
          <div className='row'>
            <div className='col-md-2 mt-4 '>
            {
                admin?<div className='border border-dark bg-success text-white d-flex justify-content-center shadow-lg'>
                    <ul className='dashboardUl mt-4 '>
                            <Link to={`${url}/manageOrders`} className='linkText'>
                                <li className='mb-3'>{order} Manage Order </li>
                            </Link>
                            <Link to={`${url}/addCamera`} className='linkText'>
                                <li className='mb-3'>{plus} Add Product </li>
                            </Link>
                            <Link to={`${url}/manageProduct`} className='linkText'>
                               <li className='mb-3'>{product} Manage Product </li>
                            </Link>
                            <Link to={`${url}/makeAdmin`} className='linkText'>
                                 <li className='mb-3'>{adminIcon} Make Admin </li>
                            </Link>
                        <button onClick={logout} className='btn btn-warning'> Sign Out  </button> 
                    </ul>
                </div>: <div className='border border-dark bg-success text-white d-flex justify-content-center shadow-lg'>
                    <ul className='dashboardUl mt-4'>
                            <Link to={`${url}/myOrders`} className='linkText'>
                                <li className='mb-3'>{order} My Orders </li>
                            </Link>

                            <Link to={`${url}/userReview`} className='linkText'>
                                <li className='mb-3'>{review} Add Reviews </li>
                            </Link>
                            <Link to={`${url}/payment`} className='linkText'>
                                <li className='mb-3'>{payment} Payment </li>
                            </Link>
                       
                         <button onClick={logout} className='btn btn-warning'> Sign Out  </button> 
                    </ul>
                </div>
            }
            </div>
            <div className='col-md-10'>
            <Switch>
            
            <Route exact path={path}> <DashBoardMessage> </DashBoardMessage> </Route> 
            <Route exact path={`${path}/manageOrders`}> <ManageOrder> </ManageOrder> </Route> 
            <Route exact path={`${path}/myOrders`}> <MyOrder> </MyOrder> </Route> 
            <Route exact path={`${path}/userReview`}> <ReviewForm> </ReviewForm> </Route>
            <Route exact path={`${path}/payment`}> <Payment> </Payment> </Route>
            <Route exact path={`${path}/addCamera`}> <AddCamera> </AddCamera> </Route>
            <Route exact path={`${path}/manageProduct`}> <ManageProduct> </ManageProduct> </Route>
            <Route exact path={`${path}/makeAdmin`}> <MakeAdmin> </MakeAdmin>  </Route>
            </Switch>

            </div>
          </div>
        </div>
    );
};

export default Dashboard;
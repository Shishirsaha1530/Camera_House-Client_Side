import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Header.css'
import useAuth from './../../hooks/useAuth';

const Header = () => {
  let {user, logout} = useAuth()
    return (
        <div>
        <nav className="navbar navbar-expand-lg fixed navbar-light bg-light shadow-lg">
              <div className="container">
                <NavLink  className="navbar-brand companyName" to="/"> Camera House </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                {/* navabar menu items */}
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <NavLink  className="nav-link"  to="/home">
                      Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_Item" className="nav-link"
                       to="/about">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_Item"  className="nav-link" 
                      to="/explore">Explore</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_Item"  className="nav-link" 
                      to="/review">Review</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_Item"  className="nav-link" 
                      to="/frequentask">FAQ</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  activeClassName="menu_Item" className="nav-link" to="/contact">
                      Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <small className='text-primary'> {user.displayName} </small> 
                    </li>

                    <li>
                    {
                      user.displayName? <Link to='/dashboard' className='btn btn-warning'> Dashboard </Link>:""
                    }
                    </li>

                    <li className="nav-item">
                    {user.displayName?  <button  onClick={logout} className='ms-0 ms-md-1 mt-2 mt-md-0 btn btn-danger' > log out </button> : <Link to="/login">
                      <button className='btn btn-success'> Login </button>
                      </Link> }
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    );
};

export default Header;
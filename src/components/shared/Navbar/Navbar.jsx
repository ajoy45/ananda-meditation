import React from 'react';
import logo from '../../../../src/assets/logo/1.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const nav=
        <ul className="menu menu-horizontal px-1 text-xl text-white">
        <li><a>Home</a></li>
        <li><a>Instructors</a></li>
        <li><a>Classes</a></li>
        <li><a>Dashboard</a></li>
    </ul>
    
    return (
        <div className="navbar bg-[#1d9ee6] py-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {nav}
                    </ul> 
                </div>
                <a className=""> <img className='w-28' src={logo} alt="" /> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
             {nav}
            </div>
            <div className="navbar-end">
                <Link to='/login'><a className="px-4 py-2 bg-[#eec03f] rounded-lg text-white">Login</a></Link>
            </div>
        </div>
    );
};

export default Navbar;
import React, { useContext } from 'react';
import logo from '../../../../src/assets/logo/1.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
const Navbar = () => {
    const{logOut,user}=useContext(AuthContext);
    const handelLogOut=()=>{
        logOut().then(()=>{
            console.log("logout success")
        }).catch(error=>{
           console.log('logout error')
        })
    }
    const nav=
        <ul className="menu menu-horizontal px-1 text-xl text-white">
        <Link to='/'><li><a>Home</a></li></Link>
       <Link to='/instructor'> <li><a>Instructors</a></li></Link>
        <Link to='/classes'><li><a>Classes</a></li></Link>
        <Link to='/dashboard'><li><a>Dashboard</a></li></Link>
        <li onClick={handelLogOut}><a>LogOut</a></li>
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
          {
                user?<><div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div></>:<div >
                <Link to='/login'><a className="px-4 py-2 bg-[#eec03f] rounded-lg text-white">Login</a></Link>
            </div>
            }
          </div>
            
        </div>
    );
};

export default Navbar;
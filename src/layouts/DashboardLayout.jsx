import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../src/assets/logo/1.png'
import { AuthContext } from '../Provider/AuthProvider';
import { AiOutlineUserAdd } from 'react-icons/ai'
import { MdFlightClass } from 'react-icons/md'
import { MdOutlineFlightClass } from 'react-icons/md'
import { FaAddressCard } from 'react-icons/fa'
import { AiOutlineSelect } from 'react-icons/ai'
import { BiArchiveIn} from 'react-icons/bi'
import { BiHistory} from 'react-icons/bi'
const DashboardLayout = () => {
    const { user, role } = useContext(AuthContext);
    console.log(role)
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-5">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <div className='flex flex-col items-center'>
                        <img className='w-48' src={logo} alt="" />
                        <div className="avatar online">
                            <div className="w-24 rounded-full mt-5">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <p>{user?.email}</p>

                    </div>
                    {/* Sidebar content here */}
                    <div className='ps-10 mt-10'>
                        {role === 'admin' ? <>
                            <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-[#eec03f]   hover:text-gray-700 cursor-pointer'>
                                < AiOutlineUserAdd className='w-5 h-5' />
                                <Link to='/dashboard/manage-users'><li>Manage Users</li></Link>
                            </div>

                            <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-[#eec03f]   hover:text-gray-700 cursor-pointer'>
                                <MdFlightClass className='w-5 h-5' />
                                <Link to='/dashboard/manage-classes'><li>Manage Classes</li></Link>
                            </div>
                        </> : role === 'instructor' ? <>
                            <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-[#eec03f]   hover:text-gray-700 cursor-pointer'>
                                <FaAddressCard className='w-5 h-5' />
                                <Link to='/dashboard/add-class'><li>Add Class</li></Link>
                            </div>
                            <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-[#eec03f]   hover:text-gray-700 cursor-pointer'>
                                <MdOutlineFlightClass className='w-5 h-5' />
                                <Link to='/dashboard/my-classes'><li>My Classes</li></Link>
                            </div>
                        </> : <>
                            <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-[#eec03f]   hover:text-gray-700 cursor-pointer'>
                                <AiOutlineSelect className='w-5 h-5'/>
                                <Link to='/dashboard/my-selected-class'><li>My selected Class</li></Link>
                            </div>
                            <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-[#eec03f]   hover:text-gray-700 cursor-pointer'>
                                <BiArchiveIn className='w-5 h-5'/>
                            <Link to='/dashboard/my-enrolled-class'><li>My enrolled Class</li></Link>
                            </div>
                            <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-[#eec03f]   hover:text-gray-700 cursor-pointer'>
                               <BiHistory className='w-5 h-5'/> 
                            <Link to='/dashboard/payment-history'><li>Payment History</li></Link>
                            </div>
                        </>}







                    </div>
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;
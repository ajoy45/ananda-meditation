import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  makeStatus } from '../../api/utilites';
import { Link } from 'react-router-dom';
import { Zoom } from 'react-awesome-reveal';

const ManageClasses = () => {
    const [classes, setClasses] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);
    const fetchClasses = async () => {
        const response = await axios.get('https://assingement-12-server.vercel.app/class');
        setClasses(response.data)

    };
    
    useEffect(() => {
        fetchClasses();
    }, [classes])

   const handelApproved=(id,text)=>{
        console.log(id)
        makeStatus(id,text).then(data=>console.log(data));
        setDisabledButtons([...disabledButtons,id])
   }
   const handelDeny=(id,text)=>{
        console.log(id)
        makeStatus(id,text).then(data=>console.log(data));
        setDisabledButtons([...disabledButtons,id])
   }
  const handelFeedback=(id,text)=>{
    
  }


    return (
        <Zoom duration={3000}>
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th> Instructor name</th>
                            <th> Instructor email</th>
                            <th> Available seats</th>
                            <th> Price</th>
                            <th>Status</th>
                            <th>permission</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.className}
                                </td>
                                <td>{item.instructorName}</td>
                                <td>{item.email}</td>
                                <td>{item.availableSeat}</td>
                                <td>{item.price}</td>
                                <td>{item.status}</td>
                                <th className='flex '>
                                    <button disabled={disabledButtons.includes(item._id)}  onClick={()=>handelApproved(item._id,'Approved')} className="btn bg-[#eec03f]  btn-xs">Approve</button>
                                    <button disabled={disabledButtons.includes(item._id)} onClick={()=>handelDeny(item._id,"Denied")} className="btn bg-[#eec03f] btn-xs">Deny</button>
                                   <Link to={`/feedback/${item._id}`}> <button className="btn bg-[#eec03f] btn-xs">Feedback</button></Link>
                                </th>
                            </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
        </Zoom>
    );
};

export default ManageClasses;
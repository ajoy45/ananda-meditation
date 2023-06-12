import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeApproved } from '../../api/utilites';

const ManageClasses = () => {
    const [classes, setClasses] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);
    const fetchClasses = async () => {
        const response = await axios.get('http://localhost:5000/class');
        setClasses(response.data)

    };
    
    useEffect(() => {
        fetchClasses();
    }, [])

   const handelApproved=(id)=>{
        console.log(id)
        makeApproved(id).then(data=>console.log(data))
   }
  


    return (
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
                                    <button onClick={()=>handelApproved(item._id)} className="btn bg-[#eec03f]  btn-xs">Approve</button>
                                    <button className="btn bg-[#eec03f] btn-xs">Deny</button>
                                    <button className="btn bg-[#eec03f] btn-xs">send feedback</button>
                                </th>
                            </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageClasses;
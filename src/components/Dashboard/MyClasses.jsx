import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';

const MyClasses = () => {
    const [myClass, setMyClass] = useState([]);
    const myClasses = async () => {
        const response = await axios.get('http://localhost:5000/class');
        setMyClass(response.data)

    };

    useEffect(() => {
        myClasses();
    }, [myClass])
    return (
       <Zoom duration={3000}>
         <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Instructor Name</th>
                        <th>Email</th>
                        <th>Enrolled Students</th>
                        <th>Status</th>
                        <th>Feedback</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myClass.map((item, index) => <tr>
                            <th>{index+1}</th>
                            <td>{item.instructorName}</td>
                            <td>{item.email}</td>
                            <td>0</td>
                            <td>{item.status}</td>
                            <td>{item.status==='Approved' || item.status==='pending'? "":item.feedback}</td>
                            <td><button className='px-3 py-2 bg-[#eec03f] rounded-lg'>Update</button></td>
                        </tr>)
                    }



                </tbody>
            </table>
        </div>
       </Zoom>
    );
};

export default MyClasses;
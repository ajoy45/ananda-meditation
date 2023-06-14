import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';

const MyEnrolledClass = () => {
    const [enroll,setEnroll]=useState([]);
    useEffect(()=>{
        fetch('https://assingement-12-server.vercel.app/confirm')
        .then(res=>res.json())
        .then(data=>setEnroll(data))
    },[])
    // console.log(enroll)
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
                        <th>Class Name</th>
                       
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        enroll.map((item, index) => <tr>
                            <th>{index+1}</th>
                            <td>{item.instructorName}</td>
                            <td>{item.email}</td>
                            <td>{item.className}</td>
                        
                            
                        </tr>)
                    }



                </tbody>
            </table>
        </div>
        </Zoom>
    );
};

export default MyEnrolledClass;
import React, { useEffect, useState } from 'react';

const MyEnrolledClass = () => {
    const [enroll,setEnroll]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/confirm')
        .then(res=>res.json())
        .then(data=>setEnroll(data))
    },[])
    // console.log(enroll)
    return (
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
    );
};

export default MyEnrolledClass;
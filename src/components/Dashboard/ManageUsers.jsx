import React, { useContext, useEffect, useState } from 'react';

import { makeAdmin, makeInstructor } from '../../api/auth';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import { Zoom } from 'react-awesome-reveal';
const ManageUsers = () => {
    const [disabledButtons, setDisabledButtons] = useState([]);
  
    const [users, setUsers] = useState([]);
    const{role}=useContext(AuthContext)
    const fetchUsers = async () => {
          const response = await axios.get('https://assingement-12-server.vercel.app/users');
          setUsers(response.data)
       
      };

    useEffect(() => {
        fetchUsers();
    }, [users])
    const handelInstructor=(email,buttonId)=>{
          makeInstructor(email)
          fetchUsers();
          setDisabledButtons([...disabledButtons, buttonId]);
       
    
    }
    const handelAdmin=(email,id)=>{
        makeAdmin(email)
        setDisabledButtons([...disabledButtons,id]);
        console.log(id)
        
        
    }
    
    // console.log(users)
    return (
        <Zoom duration={3000}>
           <div className="overflow-x-auto">
            <table className="table ">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>action instruction</th>
                        <th>action Admin</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=><>
                        <tr key={user._id}>
                            <th>{index+1}</th>
                            <td>{user?.email}</td>
                            <td>{user?.role}</td>
                            <td><button disabled={disabledButtons.includes(user._id)} onClick={()=>handelInstructor(user.email,user._id)} className='btn btn-sm'>Make Instructor</button></td>
                            <td><button disabled={disabledButtons.includes(user._id)}  onClick={()=>handelAdmin(user?.email,user._id)} className='btn btn-sm'>Make Admin</button></td>
                        </tr>
                        </>)
                    }
                    
                    
                  
                   
                </tbody>
            </table>
        </div>
        </Zoom>
    );
};

export default ManageUsers;
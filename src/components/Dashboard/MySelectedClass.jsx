import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Zoom } from "react-awesome-reveal";
const MySelectedClass = () => {
    const [selectClass, setSelectClass] = useState([]);
    const myClasses = async () => {
        const response = await axios.get('https://assingement-12-server.vercel.app/booking');
        setSelectClass(response.data)

    };

    useEffect(() => {
        myClasses();
    }, [selectClass])
    const handelDelete = id => {
        console.log(id)
        axios.delete(`https://assingement-12-server.vercel.app/booking/${id}`)
            .then(res => {
                if (res.data.deletedCount === 1) {
                    toast('delete successful')
                }
            })
            .catch(error => {
                console.log(error)
            });
    }
    return (
        <Zoom duration={3000}>
            <div>

                <div>
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Instructor Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                                <th>Pay Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectClass.map((item, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>{item.instructorName}</td>
                                    <td>${item.price}</td>
                                    <td><button onClick={() => handelDelete(item._id)} className='px-3 py-2 rounded-xl bg-[#eec03f]'>DELETE</button></td>
                                    <td><Link to={`/checkout/${item._id}`}><button className='px-3 py-2 rounded-xl bg-[#eec03f]'>PAY</button></Link></td>

                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </Zoom>
    );
};

export default MySelectedClass;
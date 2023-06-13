import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';

const Classes = () => {
    const [approvedClass, setApprovedClass] = useState([]);
    const myClasses = async () => {
        const response = await axios.get('http://localhost:5000/class/status');
        setApprovedClass(response.data)

    };

    useEffect(() => {
        myClasses();
    }, [])
    console.log(approvedClass)
    return (
        <div>
            <div>
                <h1 className='text-center py-12 text-3xl'>Here Our Approved Classes</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                    approvedClass.map(item => <ClassCard
                        key={item._id}
                        item={item}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;
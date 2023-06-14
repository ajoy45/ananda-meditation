import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InstructorCard from '../instructor/InstructorCard';
import PopularClassCard from './PopularClassCard';



const PopularClass = () => {
    const [classes, setClasses] = useState([]);
    const instructorData = async () => {
        const response = await axios.get('https://assingement-12-server.vercel.app/class');
        setClasses(response.data)

    };

    useEffect(() => {
        instructorData();
    }, [classes])
    return (
        <div className='mb-12'>
            <div>
                <h1 className='text-center py-12 text-3xl'>popular Class</h1>
            </div>
            <div className='grid grid-col-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {
                   classes.slice(0,6).map(item => <PopularClassCard
                        key={item._id}
                        item={item}
                    ></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClass;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InstructorCard from '../instructor/InstructorCard';
import PopularClassCard from './PopularClassCard';
import image from '../../../src/assets/logo/meditation.png'


const PopularClass = () => {
    const [classes, setClasses] = useState([]);
  

    useEffect(() => {
        const instructorData = async () => {
            const response = await axios.get('https://assingement-12-server.vercel.app/class');
            setClasses(response.data)
    
        };
        instructorData()
    }, [])
    return (
        <div className='mb-12'>
            <div className=" w-56 mx-auto text-black mt-20">
                <div className="divider ">
                    <img className='w-8' src={image} alt="" />
                </div>
                <h1 className='text-center text-3xl font-bold'>popular classes</h1>
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
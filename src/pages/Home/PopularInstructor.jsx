import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InstructorCard from '../instructor/InstructorCard';
import image from '../../../src/assets/logo/meditation.png'
const PopularInstructor = () => {
    const [instructors, setInstructor] = useState([]);
    

    useEffect(() => {
        const instructorData = async () => {
            const response = await axios.get('https://assingement-12-server.vercel.app/instructor');
            setInstructor(response.data)
    
        };
        instructorData()
    }, [])
    return (
        <div className='mb-12'>
            <div className=" w-72 mx-auto text-black mt-20">
                <div className="divider ">
                    <img className='w-8' src={image} alt="" />
                </div>
               <h1 className='text-center text-3xl font-bold'>popular instructors</h1>
            </div>
            <div className='grid grid-col-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {
                    instructors.slice(0,6).map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;
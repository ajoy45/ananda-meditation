import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InstructorCard from '../instructor/InstructorCard';

const PopularInstructor = () => {
    const [instructors, setInstructor] = useState([]);
    const instructorData = async () => {
        const response = await axios.get('https://assingement-12-server.vercel.app/instructor');
        setInstructor(response.data)

    };

    useEffect(() => {
        instructorData();
    }, [instructors])
    return (
        <div className='mb-12'>
            <div>
                <h1 className='text-center py-12 text-3xl'>popular Instructor</h1>
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
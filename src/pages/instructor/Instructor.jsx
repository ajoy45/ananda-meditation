import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';

const Instructor = () => {
    const [instructors, setInstructor] = useState([]);
    const instructorData = async () => {
        const response = await axios.get('http://localhost:5000/instructor');
        setInstructor(response.data)

    };

    useEffect(() => {
        instructorData();
    }, [instructors])
    return (
        <div>
            <div>
                <h1 className='text-center py-12 text-3xl'>Here Our Instructor</h1>
            </div>
            <div className='grid grid-col-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {
                    instructors.map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructor;
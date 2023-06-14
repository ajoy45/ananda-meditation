import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';
import { Zoom } from 'react-awesome-reveal';

const Instructor = () => {
    const [instructors, setInstructor] = useState([]);
    const instructorData = async () => {
        const response = await axios.get('https://assingement-12-server.vercel.app/instructor');
        setInstructor(response.data)

    };

    useEffect(() => {
        instructorData();
    }, [instructors])
    return (
        <Zoom duration={3000}>
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
        </Zoom>
    );
};

export default Instructor;
import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const InstructorCard = ({instructor}) => {
    // console.log(instructor)
    return (
       <Zoom duration={3000}>
         <div className="card w-full mt-12 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={instructor.image}alt="Shoes" className="rounded-xl w-1/2" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{instructor.name}</h2>
                <p>{instructor.email}</p>
                
            </div>
        </div>
       </Zoom>
    );
};

export default InstructorCard;
import React from 'react';

const InstructorCard = ({instructor}) => {
    console.log(instructor)
    return (
        <div className="card w-full mt-12 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={instructor.image}alt="Shoes" className="rounded-xl w-1/2" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{instructor.name}</h2>
                <p>{instructor.email}</p>
                
            </div>
        </div>
    );
};

export default InstructorCard;
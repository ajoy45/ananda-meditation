import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const PopularClassCard = ({item}) => {
    return (
        <Zoom duration={3000}>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={item.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{item.className}</h2>
                <p>available seats:{item.availableSeat}</p>
                <p>Price:${item.price}</p>
               
            </div>
        </div>
        </Zoom>
    );
};

export default PopularClassCard;
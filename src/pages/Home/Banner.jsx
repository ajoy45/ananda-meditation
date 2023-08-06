import React from 'react';
import image from '../../../src/assets/logo/home.jpg'
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div   style={{ 
            backgroundImage: `url(${image})`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            filter: "brightness(70%)"
          }}>
           <Fade duration={5000}>
           <div className='flex justify-center items-center py-24'>
                <div className='text-center w-1/2 mb-24  '>
                    <h1 className='text-white text-4xl mt-56  font-bold '>Explore the nature of your consciousness</h1>
                    <p className='text-2xl w-full md:w-96 mx-auto py-5 text-white'>A virtual conference to understand the scientific underpinnings of meditation</p>
                   <Link to='/register'> <button className='px-3 py-2 bg-[#eec03f] rounded-lg text-white'>Sign Up</button></Link>
                </div>
            </div>
           </Fade>
        </div>
    );
};

export default Banner;
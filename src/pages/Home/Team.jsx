import React from 'react';
import image from '../../../src/assets/logo/meditation.png';
import image1 from '../../../src/assets/team/1.png';
import image2 from '../../../src/assets/team/2.png';
import image3 from '../../../src/assets/team/3.png';
const Team = () => {
    return (
        <div>
           
            <div className=" w-72 mx-auto text-black mt-20">
                <div className="divider ">
                    <img className='w-8' src={image} alt="" />
                </div>
                <h1 className='text-center text-3xl font-bold'>Our Awesome Team</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                <div>
                    <div className='w-full text-center p-12'>
                        <div className='hover:bg-gray-900 hover:duration-300  hover:opacity-50 rounded-md'>
                            <img src={image1} alt="" />
                        </div>
                        <h1 className='font-bold text-xl mt-3'>Razan Smith</h1>
                        <p className='text-[#8f6cd5]'>Yoga Teacher</p>
                    </div>
                </div>
                <div >
                    <div className='w-full text-center p-12 '>
                        <div className='hover:bg-gray-900 hover:duration-300  hover:opacity-50 rounded-md'>
                            <img src={image2} alt="" />
                        </div>
                        <h1 className='font-bold text-xl mt-3'>Elina Ekman</h1>
                        <p className='text-[#8f6cd5]'>Yoga Teacher</p>
                    </div>

                </div>
                <div>
                    <div className='w-full text-center p-12'>
                        <div className='hover:bg-gray-900 hover:duration-300  hover:opacity-50 rounded-md'>
                            <img src={image3} alt="" />
                        </div>
                        <h1 className='font-bold text-xl mt-3'>Razan Smith</h1>
                        <p className='text-[#8f6cd5]'>Yoga Teacher</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
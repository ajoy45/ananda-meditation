import React from 'react';
import image from '../../../src/assets/team/about.png';
import image1 from '../../../src/assets/logo/meditation.png'
const About = () => {
    return (
        <div >
            <div className=" w-72 mx-auto text-black mt-20">
                <div className="divider ">
                    <img className='w-8' src={image1} alt="" />
                </div>
                <h1 className='text-center text-3xl font-bold'>welcome to Ananda</h1>
            </div>
            <div className='md:flex  md:justify-between items-center mt-8'>
                <div className='w-[50%] mx-auto'>
                    <h4 className='text-xl text-[#7b6cd5] font-bold mb-3'>Welcome To Ananda Studio</h4>
                    <h1 className='text-3xl mb-3'>You Can Always Control What Goes On Inside</h1>
                    <p className='text-md mb-4'>Meditation is a practice in which an individual uses a technique to still the mind or body and focus solely on their surroundings. It has been used for thousands of years and is one of the most common ways to attain zen. Meditation can be practiced in various ways, such as breath control, muscle relaxation, and visualization.</p>
                    <div className='mb-3'>
                        <span>Metabolism</span> <br />
                        <progress className="progress progress-success w-full" value="90" max="100"></progress> <br />
                        <span>Flexibility</span> <br />
                        <progress className="progress progress-primary w-full" value="70" max="100"></progress> <br />
                        <span> Breathing</span> <br />
                        <progress  className="progress progress-warning w-full" value="50" max="100" ></progress>
                    </div>
                    <button className='px-3 py-2 bg-[#eec03f] rounded-md text-white'>Read More</button>
                </div>
                <div className='w-[50%] mx-auto'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
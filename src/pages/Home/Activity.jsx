import React from 'react';
import image from '../../../src/assets/logo/meditation.png';
import img1 from '../../../src/assets/slider/Screenshot_1.png';
import img2 from '../../../src/assets/slider/Screenshot_2.png';
import img3 from '../../../src/assets/slider/Screenshot_3.png';
const Activity = () => {
    return (
        <div>
            <div className=" w-56 mx-auto text-black mt-20">
                <div className="divider ">
                    <img className='w-8' src={image} alt="" />
                </div>
                <h1 className='text-center text-3xl font-bold'>what we do</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 '>
                <div className='grid justify-items-center hover:bg-[#887ad9] p-12 ease-linear duration-300'>
                    <img src={img1} alt="" />
                    <h1 className='text-xl font-bold m-3'>Heal Your Emotions</h1>
                    <p className='text-center text-md hover:text-white'>Have you ever met an angry or rude cashier who looks like they will explode with anger at any moment? Have you dealt with a colleague who seems depressed or has sorrowful energy?</p>
                </div>
                <div className='grid justify-items-center bg-[#887ad9] p-12 ease-linear duration-300'>
                    <img src={img2} alt="" />
                    <h1 className='text-xl font-bold m-3'>Body & Spirituality</h1>
                    <p className='text-center text-md hover:text-white'>The soul takes birth in human form many times over here on this planet. And we can see that the human form takes its time to develop into a fully formed adult from the stage of an embryo to a foetus and so on.</p>
                </div>
                <div className='grid justify-items-center hover:bg-[#887ad9] p-12 ease-linear duration-300'>
                    <img src={img3} alt="" />
                    <h1 className='text-xl font-bold m-3'>Refreshens Your Body</h1>
                    <p className='text-center text-md hover:text-white'>Taking time to care for your body and mind is imperative to preventing burnout. Failing to give yourself the care that you deserve can lead to you feeling tired, groggy, anxious, and overwhelmed. </p>
                </div>
                <div className='grid justify-items-center hover:bg-[#887ad9] p-12 ease-linear duration-300'>
                    <img src={img3} alt="" />
                    <h1 className='text-xl font-bold m-3'>Refreshens Your Body</h1>
                    <p className='text-center text-md hover:text-white'>Taking time to care for your body and mind is imperative to preventing burnout. Failing to give yourself the care that you deserve can lead to you feeling tired, groggy, anxious, and overwhelmed. </p>
                </div>
                <div className='grid justify-items-center hover:bg-[#887ad9] p-12 ease-linear duration-300'>
                    <img src={img3} alt="" />
                    <h1 className='text-xl font-bold m-3'>Refreshens Your Body</h1>
                    <p className='text-center text-md hover:text-white'>Taking time to care for your body and mind is imperative to preventing burnout. Failing to give yourself the care that you deserve can lead to you feeling tired, groggy, anxious, and overwhelmed. </p>
                </div>
                <div className='grid justify-items-center hover:bg-[#887ad9] p-12 ease-linear duration-300'>
                    <img src={img3} alt="" />
                    <h1 className='text-xl font-bold m-3'>Refreshens Your Body</h1>
                    <p className='text-center text-md hover:text-white'>Taking time to care for your body and mind is imperative to preventing burnout. Failing to give yourself the care that you deserve can lead to you feeling tired, groggy, anxious, and overwhelmed. </p>
                </div>
            </div>
        </div>
    );
};

export default Activity;
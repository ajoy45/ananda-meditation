import React from 'react';
import image from '../../../src/assets/logo/meditation.png'
import { Slide } from 'react-awesome-reveal';
const Pricing = () => {
    return (

        <Slide direction='up' duration='3000'>
            <div>
                <div className=" w-56 mx-auto text-black mt-20">
                    <div className="divider ">
                        <img className='w-8' src={image} alt="" />
                    </div>
                    <h1 className='text-center text-3xl font-bold'>Pricing List</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 mb-5'>
                    <div className="mb-4 overflow-hidden rounded-lg shadow-lg">
                        <div className="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6 hover:bg-[#7b6cd5] hover:text-white">
                            <div className="flex justify-center">
                                <span className="text-3xl font-bold">
                                    Basic Plan
                                </span>
                            </div>
                            <div className="flex justify-center mt-4 text-6xl font-extrabold leading-none dark:text-white hover:text-white">
                                $10
                                <span className="pt-8 ml-1 text-2xl font-medium leading-8 text-gray-500 hover:text-white  dark:text-gray-400">
                                    /month
                                </span>
                            </div>
                        </div>
                        <div className="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
                            <ul>
                                <li className="flex items-start mt-4">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                                        $10/month per user
                                    </p>
                                </li>
                                <li className="flex items-start mt-4">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                                        limited number of projects
                                    </p>
                                </li>
                                <li className="flex items-start mt-4">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                                        Cancel anytime
                                    </p>
                                </li>
                            </ul>
                            <div className="mt-6 rounded-md shadow">
                                <a href="#" className="flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-[#eec03f] border border-transparent rounded-md  focus:outline-none focus:shadow-outline">
                                    Start
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 overflow-hidden rounded-lg shadow-lg">
                        <div className="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6 hover:text-white hover:bg-[#7b6cd5]">
                            <div className="flex justify-center">
                                <span className="text-3xl font-bold">
                                    Premium
                                </span>
                            </div>
                            <div className="flex justify-center mt-4 text-6xl font-extrabold leading-none dark:text-white">

                                $50
                                <span className="pt-8 ml-1 text-2xl font-medium leading-8 text-gray-500 hover:text-white dark:text-gray-400">
                                    /month
                                </span>
                            </div>
                        </div>
                        <div className="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
                            <ul>
                                <li className="flex items-start mt-4">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                                        $50/month per user
                                    </p>
                                </li>
                                <li className="flex items-start mt-4">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                                        Unlimited number of projects
                                    </p>
                                </li>
                                <li className="flex items-start mt-4">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                                        Cancel anytime
                                    </p>
                                </li>
                            </ul>
                            <div className="mt-6 rounded-md shadow">
                                <a href="#" className="flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out  bg-[#eec03f] border border-transparent rounded-md  focus:outline-none focus:shadow-outline">
                                    Start
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 overflow-hidden rounded-lg shadow-lg">
                        <div className="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6 hover:bg-[#7b6cd5] hover:text-white">
                            <div className="flex justify-center">
                                <span className="text-3xl font-bold">
                                    Platinum
                                </span>
                            </div>
                            <div className="flex justify-center mt-4 text-6xl font-extrabold leading-none dark:text-white">

                                $100
                                <span className="pt-8 ml-1 text-2xl font-medium leading-8 text-gray-500 hover:text-white dark:text-gray-400">
                                    /month
                                </span>
                            </div>
                        </div>
                        <div className="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
                            <ul>
                                <li className="flex items-start mt-4">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                                        $100/month per user
                                    </p>
                                </li>
                                <li className="flex items-start mt-4">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                                        Unlimited number of projects
                                    </p>
                                </li>
                                <li className="flex items-start mt-4">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                                        Cancel anytime
                                    </p>
                                </li>
                            </ul>
                            <div className="mt-6 rounded-md shadow">
                                <a href="#" className="flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out  bg-[#eec03f] border border-transparent rounded-md  focus:outline-none focus:shadow-outline">
                                    Start
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>

    );
};

export default Pricing;